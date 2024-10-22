import { createRoot } from 'react-dom/client';
import './styles.css'

const Demo = () => (
  <div>
    <h1>Testing UI Components</h1>
  </div>
);

const container = document.getElementById('app');

const root = createRoot(container!);
root.render(<Demo />)
