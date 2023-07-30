import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import './dragDrop.scss';
import { useRef } from 'react';

export default function DragDrop() {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  return (
    <div className='dragDropContainer' onClick={handleClick} draggable>
      <div className='dragDropContent'>
        <FileUploadOutlinedIcon fontSize={'small'} style={{ color: '#4F566B'}} />
        <div className='dragDropText'>
          Drag & Drop or <span>Choose file</span> to upload
        </div>
      </div>
      <input type='file' ref={inputRef} hidden />
    </div>
  )
}