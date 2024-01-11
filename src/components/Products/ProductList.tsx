import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'

type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{ marginBottom: '30px' }}
            >
                List of products
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="Iphone 13 Pro"
                        description="This is Iphone 13 Pro"
                        // тут я не зазначив type, однак він вказаний за замовчуванням в ProductListItemType
                        capacity={64}
                        price={700}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="Iphone 14 Pro"
                        description="This is Iphone 14 Pro"
                        type="phone"
                        capacity={128}
                        price={800}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="Iphone 15 Pro"
                        description="This is Iphone 14 Pro"
                        type="phone"
                        capacity={256}
                        price={900}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductList
