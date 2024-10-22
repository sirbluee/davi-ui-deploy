import { createRoot } from 'react-dom/client';
import './styles.css'
import Input from './components/atoms/Input';  // Assuming index.tsx exports Button

const Demo = () => (
  <div>
    <h1>Testing UI Components</h1>
    <Input />
  </div>
);

const container = document.getElementById('app');

const root = createRoot(container!);
root.render(<Demo />)
