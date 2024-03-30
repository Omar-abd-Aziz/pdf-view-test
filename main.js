
let src = `
https://firebasestorage.googleapis.com/v0/b/file-upload-d8004.appspot.com/o/1699283803771-uc%20prices.pdf?alt=media&token=be42fab7-906d-4946-881e-31cd7bf662dd
`;

document.querySelector("iframe").src=`https://docs.google.com/gview?url=${src}&embedded=true`