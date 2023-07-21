import React from 'react';
import axios from 'axios';

const FileOperations = () => {
  const handleDownload = () => {
    const fileUrl = 'https://example.com/path/to/file';

    axios({
      url: fileUrl,
      method: 'GET',
      responseType: 'blob', // important to set the response type as 'blob'
    })
      .then((response) => {
        const contentDisposition = response.headers['content-disposition'];
        const filename = contentDisposition
          ? contentDisposition.split('filename=')[1].trim()
          : 'downloadedFile';

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error('Error downloading the file:', error);
      });
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    axios
      .post('https://example.com/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        console.log('Server response:', response.data);
        // Handle successful upload
      })
      .catch((error) => {
        console.error('Error uploading the file:', error);
        // Handle file upload error
      });
  };

  return (
    <div>
      <button onClick={handleDownload}>Download File</button>
      <input type="file" onChange={handleUpload} />
    </div>
  );
};

export default FileOperations;
