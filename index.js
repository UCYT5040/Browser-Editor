let fileHandle;

async function loadFile() {
  // open file picker
  [fileHandle] = await window.showOpenFilePicker();

  if (fileHandle.kind === 'file') {
    file = await fileHandle.getFile();
    document.getElementById("texts").value = await file.text()
  } else if (fileHandle.kind === 'directory') {
    alert("Must be file not folder.");
  }

}

async function saveFile() {

  // create a new handle
  const newHandle = await window.showSaveFilePicker();

  // create a FileSystemWritableFileStream to write to
  const writableStream = await newHandle.createWritable();

  // write our file
  await writableStream.write(imgBlob);

  // close the file and write the contents to disk.
  await writableStream.close();
}

async function saveFile() {

    // create a new handle
    const newHandle = await window.showSaveFilePicker();
  
    // create a FileSystemWritableFileStream to write to
    const writableStream = await newHandle.createWritable();
  
    // write our file
    await writableStream.write(document.getElementById("texts").value);
  
    // close the file and write the contents to disk.
    await writableStream.close();
  }