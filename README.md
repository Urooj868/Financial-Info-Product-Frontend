# Financial Info Product Frontend

A modern React-based chat interface for querying financial and banking information using RAG (Retrieval-Augmented Generation) technology. This application provides an intuitive conversational interface to ask questions about banking products and services.

## Features

- 💬 **Interactive Chat Interface**: Clean and responsive chat UI for natural conversations
- 🤖 **AI-Powered Responses**: Powered by Ollama language models with source attribution
- ⚙️ **Customizable Settings**: Adjust model parameters including temperature and top-k retrieval
- 📚 **Source Attribution**: View the source documents used to generate each response
- 🎨 **Modern UI**: Built with React 19 and styled with custom CSS
- ⚡ **Fast & Responsive**: Powered by Vite for lightning-fast development and builds

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Styling**: Custom CSS
- **Linting**: ESLint with React Compiler support

## Prerequisites

Before running this project, ensure you have:

- Node.js (v18 or higher recommended)
- npm or yarn package manager
- Backend API running on `http://localhost:5000` (see backend setup)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Urooj868/Financial-Info-Product-Frontend.git
cd Financial-Info-Product-Frontend
```

2. Install dependencies:

```bash
npm install
```

3. Ensure your backend API is running on `http://localhost:5000`

## Usage

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

Create a production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## Project Structure

```
chat-front/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ChatWindow.jsx         # Main chat display area
│   │   ├── ChatWindow.css
│   │   ├── InputArea.jsx          # Message input component
│   │   ├── InputArea.css
│   │   ├── MessageBubble.jsx      # Individual message display
│   │   ├── MessageBubble.css
│   │   ├── SettingsPanel.jsx      # Model settings configuration
│   │   ├── SettingsPanel.css
│   │   ├── SourceAttribution.jsx  # Source citations display
│   │   └── SourceAttribution.css
│   ├── assets/          # Images and static files
│   ├── App.jsx          # Main application component
│   ├── App.css          # Global application styles
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Project dependencies
```

## Configuration

### API Endpoint

The default API endpoint is set to `http://localhost:5000`. To change this, modify the axios baseURL in `src/App.jsx`:

```javascript
axios.defaults.baseURL = "http://localhost:5000";
```

### Default Settings

Default model settings can be configured in `src/App.jsx`:

```javascript
const [settings, setSettings] = useState({
  model: "gemma3:1b", // Default model
  temperature: 0.7, // Creativity level (0-1)
  topK: 3, // Number of sources to retrieve
});
```

## API Integration

The application expects the following API endpoints:

### GET `/api/models`

Returns available Ollama models.

**Response:**

```json
{
  "models": ["gemma3:1b", "llama2", "mistral"]
}
```

### POST `/api/chat`

Sends a question and receives an AI-generated response with sources.

**Request:**

```json
{
  "question": "What are your savings account options?",
  "model": "gemma3:1b",
  "temperature": 0.7,
  "top_k": 3
}
```

**Response:**

```json
{
  "answer": "We offer several savings account options...",
  "sources": [{ "id": "savings_products.pdf" }, { "id": "account_terms.pdf" }]
}
```

## Features in Detail

### Chat Interface

- Real-time message display with user and assistant roles
- Auto-scrolling to latest messages
- Loading indicator during response generation
- Empty state with welcome message

### Settings Panel

- Model selection from available Ollama models
- Temperature adjustment (0.0 - 1.0) for response creativity
- Top-K setting (1-10) for number of retrieved source documents
- Real-time setting updates

### Source Attribution

- Display of source documents used for each response
- Clear visual separation from the main response
- Document icon and ID for each source

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Vite](https://vite.dev/)
- Icons by [Lucide](https://lucide.dev/)
- Uses [Ollama](https://ollama.ai/) for language models

## Support

For issues, questions, or contributions, please visit the [GitHub repository](https://github.com/Urooj868/Financial-Info-Product-Frontend).
