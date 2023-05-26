import React, { useState } from 'react';
import { PDFViewer, Document, Page, Text, StyleSheet, Image } from '@react-pdf/renderer';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';
import './App.css';

import image1 from './1Ero.png';
import image2 from './2do.png';
import image3 from './3ero.png';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 10,
  },
  image1: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 200,
  },
  image2: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: 200,
  },
  image3: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 200,
  },
});

const App = () => {
  const [text, setText] = useState('');

  const MyDocument = () => (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Mi documento convertido a PDF</Text>
        <Image style={styles.image3} src={image3} />
        <Text style={styles.paragraph}>{text}</Text>
        <Image style={styles.image1} src={image1} />
        <Image style={styles.image2} src={image2} />
      </Page>
    </Document>
  );

  return (
    <div className="App">
      <div className="editor">
        <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data);
          }}
        />
      </div>
      <div>
        <h2>Contenido</h2>
        <p>{text}</p>
      </div>
      <div>
        <PDFViewer width="500" height="600">
          <MyDocument />
        </PDFViewer>
      </div>
    </div>
  );
};

export default App;