import axios from 'axios'
import { useEffect, useState } from 'react';
import Layout from "../../admincomponent/AdminLayout";
import axiosInstance from '../../axiosInstance';

 function Newsentry() { 


  const [records, setRecords] = useState([]);
  const [news_description, setNewsItem] = useState('');
  const [infoMsg, setInfo] = useState('');
  const [ipaddress, setipaddress] = useState('ipaddress');
  const [errorMessage, setErrorMessage] = useState('');




    // Fetch data from the API by sending the authentication token
    const fetchnewitem = async () => {
      try {
         
       // const response = await axios.get('http://localhost:3001/api/v1/news');
        const response = await axiosInstance.get('/news');

        //    console.log("reponse status is "+response.status);
        if (response.status === 200) {
          const data = await response.data;
          console.log(data);

          const updatedData = data.map((item) => ({
            ...item,
            isactive: item.isactive.data[0] === 1 ? 'Active' : 'Inactive',
          }));


          setRecords(updatedData)
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
    news_description,
    ipaddress,
  }
  // console.log('-------start----');
  // console.log(edata);
  // console.log('--------end----------');

  if (!news_description) {
    setErrorMessage('Please enter value in news description box'); // Display error message for empty textbox
    return;
  }

  try {

//    await axios.post('http://localhost:3001/api/v1/news', edata)
          await axiosInstance.post('/news',edata);
    //console.log('Message sent successfully');
    setInfo('Message saved successfully')  ;
    setNewsItem('');
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
await axiosInstance.delete('/news/'+id);
 console.log('Record deleted successfully');
    setInfo('Record deleted successfully')  ;
    fetchnewitem(); // Fetch records again after deletion to update the list
  } catch (error) {
    console.log('Error occurred while deleting the record:', error);
    setInfo('Error occurred while deleting the record:');
  }
};




  
  return( <Layout
    mainTitle="Home "
    footer={`Copyright ${new Date().getFullYear()}`}>

      <div className="mt-1">
        <div className="card  titlestrip ">
          <div className="card-header">
           Add Important News      {infoMsg}
          </div>
          <div className="justifytext fs-5 p-3">
      <form onSubmit={handleSubmit}> 
        <div className='row'>
          <label htmlFor="message">News Desciption</label>
          <textarea id="news_description" value={news_description} onChange={(e) => setNewsItem(e.target.value)} />
        </div>
        <div className="mt-3"></div>
        <button type="submit" className='btn btn-primary'>Submit</button>   &nbsp;&nbsp;&nbsp;
       <span className='error-message'> {errorMessage} </span> <span className='success-message'> {infoMsg} </span>
      </form>
    
  </div>
          
        </div>
      </div>
    




<div>
      <h1>Added Latest News</h1> 
    </div>
     <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>News Description</th><th>isactive</th><th>entry_date</th><th>ipaddress</th><th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {records && records.map((item) => (
            <tr key={item.news_id}>
              <td>{item.news_id}</td>
              <td>{item.news_description}</td>
               <td>{item.isactive}</td> 
              <td>{item.entry_date}</td>
              <td>{item.ipaddress}</td>
              <td>  <button onClick={() => handleDelete(item.news_id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table> 





    </Layout>);
};


export default Newsentry
