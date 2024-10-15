

// const the api path to use
const api_path = `${process.env.api_base}/pull`;

async function getLastPull() {
    // get the last pull date from the database
    const lastPull = await db.collection('pulls').findOne({}, { sort: { _id: -1 } });
};

// returns the last time the authneticated user pulled data from GitHub to the service
router.get(`${api_path}`, (req, res) => {
    // Handle GET request logic here
});

router.post('/', (req, res) => {
    // Handle POST request logic here
});


module.exports = router;

