import { Button, Popover } from 'antd';
import './index.css'

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const About = () => {

  return  (
    <div className='container' id="container">
    <Popover content={content} title="Title"  arrow={false} getPopupContainer={() => document.getElementById('container')}>
      <Button type="primary" className='btntt'>Hover me</Button>
    </Popover>
    </div>
  );
}

export default About;