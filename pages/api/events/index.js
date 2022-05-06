const { events } = require('./data.json');

const eventsAPI = (req, res) => {
   if (req.method === 'GET') {
      res.status(200).json(events);
   } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
   }
};

export default eventsAPI;
