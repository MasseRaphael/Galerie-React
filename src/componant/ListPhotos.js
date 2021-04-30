import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import LazyLoad from "react-lazyload";


const ListPhotos = () => {
    const [listPhotos, setListPhotos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then((photos) => setListPhotos(photos))
            .catch((e) => console.error(e));
    }, []);

    return <div>
        <Grid container>
        {listPhotos.map((photos) => (
            <Box key={photos.id} width={600} marginRight={2} my={5}>
                <LazyLoad height={200}>
                <img style={{ width: 600, height: 600}} alt={photos.thumbnailUrl} src={photos.url} />
                <Box pr={2}>
                    <Typography gutterBottom variant="body2">{photos.title}</Typography>
                </Box>
                </LazyLoad>
            </Box>
        ))}
        </Grid>
    </div>
};

export default ListPhotos