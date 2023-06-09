import { React } from 'react';
import './App.scss';
import { PDFViewer, StyleSheet } from '@react-pdf/renderer';
import Invoice from './components/Invoice';
const pdf = StyleSheet.create({ frame: {
	width: '90vw',
	height: '90vh',
}});

const App = (context) => <div className="App">
	<PDFViewer style={ pdf.frame }>
		<Invoice { ...context }/>
	</PDFViewer>
</div>;

export default App;
