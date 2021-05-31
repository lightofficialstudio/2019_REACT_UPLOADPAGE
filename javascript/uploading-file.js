let token = '9c90c28fda19fddf5f80376c4840d87f415d48b5'

function onUpload () {
  const fileInput = document.querySelector('input') ;
  const formData = new FormData()
  formData.append('file', fileInput.files[0]);
  fetch('https://resume-parser.affinda.com/public/api/v1/documents/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        // If you add this, upload won't work
        // 'Content-Type': 'multipart/form-data'
      },
      body: formData,
    }).then(r => r.json()).then(r => console.log(r))

}