import { Typography } from "@mui/material";

interface Props {
    category: string
}

const FoodRowHeader: React.FC<Props> = ({ category }) => {
    return (
    <>
        <Typography variant="h4">{category}</Typography>
    </>
  );
}
export default FoodRowHeader
