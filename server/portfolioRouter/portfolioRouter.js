const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// this router.get gets item from two diffrent table using (JOIN)...
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "tags" JOIN "projects"
                       ON "projects"."tag_id" = tags."id";`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log('there is an error in get', error);
            res.sendStatus(500);
        })
})

router.get('/tags', (req, res) => {
    const queryText = 'SELECT * FROM tags';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT tags query', err);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    const newProject = req.body;
    const queryText = `INSERT INTO projects ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
                       VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    const queryValues =[
        newProject.name,
        newProject.description,
        newProject.thumbnail,
        newProject.website,
        newProject.github,
        newProject.date_completed,
        newProject.tag_id
    ]   
    pool.query(queryText, queryValues) 
    .then(response => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('There is error in post NewProject');
        res.sendStatus(500);
    })               
})


module.exports = router;