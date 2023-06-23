import { DashboardSection1Style } from "./style.jsx";
import Grid from '@mui/material/Grid';
import DashboardSection1Card from "../DashboardSection1Card/index.jsx";
import ActivePropertiesIcon from "../../icons/Dashboard/S1ActivePropertiesIcon.jsx";
import BlockIcon from "../../icons/Dashboard/S1BlockIcon.jsx";
import FloorsIcon from "../../icons/Dashboard/S1FloorsIcon.jsx";
import ResidentsIcon from "../../icons/Dashboard/S1Residents.jsx";
import ActiveUnitIcon from "../../icons/Dashboard/S1ActiveUnitIcon.jsx";
import OccupiedIcon from "../../icons/Dashboard/S1OccupiedIcon.jsx";
import ReservedIcon from "../../icons/Dashboard/S1ReservedIcon.jsx";
import VacantIcon from "../../icons/Dashboard/S1VacantIcon.jsx";

export default function DashboardSection1({ dashData }) {
    const classes = DashboardSection1Style();
   
    const renderIconComponent = (iconName) => {
        // Map icon image names to their corresponding components
        const iconComponentMap = {
          ActivePropertiesIcon: ActivePropertiesIcon,
          ActiveUnitIcon : ActiveUnitIcon,
          BlockIcon : BlockIcon,
          FloorsIcon : FloorsIcon,
          ResidentsIcon : ResidentsIcon,
          ReservedIcon : ReservedIcon,
          OccupiedIcon : OccupiedIcon,
          VacantIcon : VacantIcon,
        };
    
        const IconComponent = iconComponentMap[iconName];
    
        if (IconComponent) {
          return <IconComponent />;
        } else {
          return null; // Or render a default icon component if needed
        }
      };
      
    return (

        <Grid container spacing={2}>

            {dashData?.cards?.map((property, index) => {
                return (
                    <Grid item xs={6} md={4} lg={1.5} key={index}>
                        <DashboardSection1Card title={property.title} image={renderIconComponent(property.image)}count={property.count} />
                    </Grid>
                );
            })} 



        </Grid>

    );
}
