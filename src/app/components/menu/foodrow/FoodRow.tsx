import { Grid } from "@mui/material";
import { Food } from "../../../models/Food";
import FoodCard from "../foodCard/FoodCard";
import FoodRowHeader from "../foodRowHeader/FoodRowHeader";


interface Props {
    category: string;
    categoryFoods: Food[];
}

const FoodRow: React.FC<Props> = ({ category, categoryFoods }) => {
    return (
        <>
            <div>
                <FoodRowHeader category={category} />
                <Grid container spacing={4} sx={{ flexWrap: 'nowrap'}}>                            
                    {categoryFoods.map((food, index) => (                        
                        <Grid item xs={4} key={index}>
                            <FoodCard food={food} />
                        </Grid>
                    ))}                    
                </Grid>
            </div>
        </>
    );
}
export default FoodRow
