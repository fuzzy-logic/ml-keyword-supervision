import { useState } from "react";
import { Form, Button, Modal, Input } from 'antd';
import '../index.css';
const { TextArea } = Input;


function ParagraphList() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialParagraph = {
    url: "test",
    text: "text",
    keywords: ["word1", "word2", "word3"],
    model: "model"
  };
  const [newParagraph, setNewParagraph] = useState(initialParagraph);

  const [paragraphs, setParagraphs] = useState([
    {id: "a", url: "http://test.com/test1", text: "The cat sat on the mat", keywords: ['cat', 'mat'], model: "nouns"}, 
    {id: "b", url: "http://test.com/test2", text: "The dog sat on the log", keywords: ['dog', 'log'], model: "nouns"}
  ]);

  const onFinish = (values) => {
    console.log('Success:', values);
    setNewParagraph(values);
    setParagraphs([...paragraphs, values]);
    console.log(`handleOk() paragraphs=${paragraphs.length}`);
    setNewParagraph(initialParagraph);
    setIsModalOpen(false);
  };



  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="Paragraph">
      <header className="Paragraph-header">
      <p> Paragraphs </p>  <Button onClick={showModal}>Add Paragraph</Button> 
      </header>
      <div> 
         <Input placeholder="search"/> 
      </div>


    {paragraphs.map((p, i) => {
      return <div  key={i}>
        <a
          className="Paragraph-link"
          href="/paragraph/1"
          target="_blank"
          rel="noopener noreferrer"
        >
        {i}{p.id} = {p.url}
        </a>
      </div>;
    })
    }
      

        


          <Modal title="Basic Modal" open={isModalOpen} closable={true} destroyOnClose={true}   onCancel={closeModal}  footer={null}>
          <Form name="newParagraph" onFinish={onFinish}>  
          <Form.Item label="url" name="url" rules={[{ required: true, message: 'Please input url' }]}>  
            <Input placeholder="url" value={newParagraph.url}/>
          </Form.Item>

          <Form.Item label="text" name="text" rules={[{ required: true, message: 'Please input text' }]}>  
            <TextArea
                value={newParagraph.text}
                placeholder="add paragraph text here"
                autoSize={{ minRows: 4, maxRows: 12 }}
              />
           </Form.Item>

           <Form.Item label="keywords" name="keywords" rules={[{ required: true, message: 'Please input keywords' }]}>  
            <Input placeholder="keywords" value={newParagraph.keywords}/>
            </Form.Item>

            <Form.Item label="model" name="model" rules={[{ required: true, message: 'Please input model' }]}>  
            <Input placeholder="model" value={newParagraph.model} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>

            </Form>
      </Modal>
    </div >
  );
}

export default ParagraphList;
