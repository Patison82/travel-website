

export default function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, subject, message } = req.body;
  
      
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Subject:', subject);
      console.log('Message:', message);
  
      res.status(200).json({ status: 'OK' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }