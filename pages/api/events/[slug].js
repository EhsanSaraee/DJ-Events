const { events } = require('./data.json');

const eventAPI = (req, res) => {
   const event = events.filter((e) => e.slug === req.query.slug);

   if (req.method === 'GET') {
      res.status(200).json(event);
   } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
   }
};

export default eventAPI;
