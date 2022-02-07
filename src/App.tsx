import { useState, useEffect, FormEvent } from "react";
import * as C from './App.styles';
import * as Photos from "./services/photos";
import { Photo } from "./types/Photo";
import { PhotoItem } from "./components/PhotoItem";

import './App.css';

const App = () => {

  const [uploading, setUploading ] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(()=>{
    getPhotos();
  }, []);

  const getPhotos = async () => {
    setLoading(true);
    setPhotos(await Photos.getAll());
    setLoading(false);
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if (file && file.size > 0) {
      setUploading(true); // Realiza o envio do arquivo
      let result = await Photos.insert(file);
      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  }

  const handleDeleteClick = async (name: string) => {
    let confirmAction = window.confirm("Tem certeza que deseja excluir este arquivo?");
    if (confirmAction) {
      await Photos.deletePhoto(name);
      alert("Arquivo Deletado com Sucesso!");
    } else {
      alert("Cancelado");
    }
    getPhotos();
  }
  

  return (
    <C.Container>
        <C.Header>Galeria de Imagens</C.Header>
      <C.Area>

        {/* Area de upload */}
        <C.UploadForm method="POST" onSubmit={handleFormSubmit} >
          <label>
            Enviar Arquivo  
            <input type="file" name="image" />
          </label> 

          {uploading && "Enviando..."}

          <input type="submit" value="Enviar" />
          
        </C.UploadForm>

        {/* Lista de fotos */}
        {loading &&
          <C.ScreenWarning>
            <div className="emoji"></div>
            <div className="load--text">Carregando...</div>
          </C.ScreenWarning>
        }

        {!loading && photos.length > 0 &&
          <C.PhotoList>
            {photos.map((item, index ) => ( 
              <PhotoItem 
                key={index} url={item.url} 
                name={item.name} 
                onDelete={handleDeleteClick}
              />
            ))}
          </C.PhotoList>
        }

        {!loading && photos.length === 0 &&
          <C.ScreenWarning>
            <div className="not-found">💭</div>
            <div className="load--text">Não há fotos para mostrar.</div>
          </C.ScreenWarning>
        }

      </C.Area>
    </C.Container>
  );
}

export default App;