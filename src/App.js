
import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => {
        // Create a new window to display the fetched data
        const newWindow = window.open();
        // Create a new document inside the new window
        const newDocument = newWindow.document.open();
        // Build the HTML content using the fetched data
        let htmlContent = '';
        data.forEach(item => {
          const { id, name, summary, image } = item.show;
          htmlContent += `
            <div>
              <h2>${name}</h2>
              <img src="${image?.medium}" alt="${name}" />
              <p>${summary}</p>
            </div>
          `;
        });
        // Write the HTML content to the new document
        newDocument.write(htmlContent);
        newDocument.close();
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TV Shows</h1>
        <button id="load-data-button" onClick={handleClick}><h3>Browse Content</h3></button>
      </header>
      <main>
       
      </main>
    </div>
  );
}

export default App;