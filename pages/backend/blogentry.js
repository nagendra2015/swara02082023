import axios from 'axios'
import { useEffect, useState } from 'react';
import Layout from "../../admincomponent/AdminLayout";
import axiosInstance from '../../axiosInstance';

 function Blogentry() { 


  const [records, setRecords] = useState([]);
  const [Blog_Subject, setBlog_Subject] = useState('');
  const [Blog_Description, setBlog_Description] = useState('');
 // const [news_description, setNewsItem] = useState('');
 
  const [infoMsg, setInfo] = useState('');
  //const [ipaddress, setipaddress] = useState('ipaddress');
  const [errorMessage, setErrorMessage] = useState('');


    // Fetch data from the API by sending the authentication token
    const fetchnewitem = async () => {
      try {         
        const response = await axiosInstance.get('/blog');
        //    console.log("reponse status is "+response.status);
        if (response.status === 200) {
          const data = await response.data;
          console.log(data);
          setRecords(data)
        } else {
          console.error('API request failed');
        }
      } catch (error) {
        console.log("error is :-"+error);
      }
    };
  useEffect(() => {
    fetchnewitem();
  }, []);

const handleSubmit = async (e) => {
 
  setErrorMessage('');
  setInfo('')  ;
  e.preventDefault();
  const edata = {
    Blog_Subject,
    Blog_Description,
  }
  // console.log('-------start----');
  if (!Blog_Subject) {
    setErrorMessage('Please enter value in blog subject box'); // Display error message for empty textbox
    return;
  }
  if (!Blog_Description) {
    setErrorMessage('Please enter value in blog Description box'); // Display error message for empty textbox
    return;
  }

  try {

//    await axios.post('http://localhost:3001/api/v1/news', edata)
          await axiosInstance.post('/blog',edata);
    //console.log('Message sent successfully');
    setInfo('Message saved successfully')  ;
    setBlog_Description('');
    setBlog_Subject('');
    fetchnewitem();
  } catch (err) {

    setInfo('Error occered')  ;
    console.log(err)
  }
}

const handleDelete = async (id) => {
  try {

    const confirmDelete = window.confirm('Are you sure you want to delete this record?');
      
    if(!confirmDelete)
    return;

//    console.log("new id for delete :-"+id)
  
//await axios.delete('http://localhost:3001/api/v1/news/'+id);
await axiosInstance.delete('/blog/'+id);
 console.log('Record deleted successfully');
    setInfo('Record deleted successfully')  ;
    fetchnewitem(); // Fetch records again after deletion to update the list
  } catch (error) {
    console.log('Error occurred while deleting the record:', error);
    setInfo('Error occurred while deleting the record:');
  }
};




  
  return( <Layout
    mainTitle="Blog Entry "
    footer={`Copyright ${new Date().getFullYear()}`}>

      <div className="mt-1">
        <div className="card  titlestrip ">
          <div className="card-header">
           Add New Blog      {infoMsg}
          </div>
          <div className="justifytext fs-5 p-3">
      <form onSubmit={handleSubmit}> 
        <div className='row'>
          <label htmlFor="message">Blog Subject</label>
          <textarea id="Blog_Subject" value={Blog_Subject} onChange={(e) => setBlog_Subject(e.target.value)} />
        </div>

        <div className='row'>
          <label htmlFor="message">Blog Desciption</label>
          <textarea id="Blog_Subject" value={Blog_Description} onChange={(e) => setBlog_Description(e.target.value)} />
        </div>
        

        <div className="mt-3"></div>
        <button type="submit" className='btn btn-primary'>Submit</button>   &nbsp;&nbsp;&nbsp;
       <span className='error-message'> {errorMessage} </span> <span className='success-message'> {infoMsg} </span>
      </form>
    
  </div>
          
        </div>
      </div>
    




<div>
      <h1>Latest Blog </h1> 
    </div>
     <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Blog Subject</th><th>Blog Description</th><th>entry_date</th><th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {records && records.map((item) => (
            <tr key={item.Blog_Id}>
              <td>{item.Blog_Subject}</td>
              <td>{item.Blog_Description}</td>
               <td>{item.Image_Url}</td> 
              <td>{item.entry_date}</td>
             
              <td>  <button onClick={() => handleDelete(item.Blog_Id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table> 





    </Layout>);
};


export default Blogentry
