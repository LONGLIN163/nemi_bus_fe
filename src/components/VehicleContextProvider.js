
import React, { useEffect,useState,createContext,useContext} from 'react';
import {actives,buses } from '../store';

export const VehicleContext = createContext({})
export const useVehicleContext = () => useContext(VehicleContext);

export const VehicleContextProvider = ({children}) => {

    const [initVehicles,setInitVehicles]=useState(buses);
    const [vehicle,setVehicle]=useState({});
    const [category,setCategory]=useState('');
    const [editMode,setEditMode]=useState(false);
    const [openDialog,setOpenDialog]=useState(false);
    const [vehicleStatus,setVehicleStatus]=useState(actives);
    const [vehiclesByStatus,setVehiclesByStatus]=useState([]);


    const getVehicleTypes=()=>{
        const initData=vehicleStatus.reduce((initVehicles, category) => ({
          ...initVehicles,
          [category]:[]
        }),{})
        return Object.entries( 
          initVehicles.reduce((initVehicles, vehicle) => {
            const {active}=vehicle
            initVehicles[active] = [...initVehicles[active],vehicle]
            return initVehicles;
          },initData)
        )
      }
    useEffect(() => {
        setVehiclesByStatus(getVehicleTypes())
      },[initVehicles])
    const onCatSelect=(category)=>{
          setCategory(category)
      }
    const onItemSelect=(id)=>{
         setVehicle(initVehicles.find(item => item.id===id))
         setEditMode(false)
      }
    const onItemCreate = (vehicle) => {
         const pArr=[]
         pArr.push(vehicle)
         const temp=initVehicles.concat(pArr)
         setInitVehicles(temp)
      }
    const onDeleteItem = (id) => {
         const tempVehicles=initVehicles.filter(item => item.id!==id);
         setInitVehicles(tempVehicles)
         setEditMode(vehicle.id===id ? false : editMode)
         setVehicle(vehicle.id===id ? {} : vehicle)
       }
    const onEditItem = (id) => {
         setVehicle(initVehicles.find(item => item.id===id))
         setEditMode(true)
       }
    const onEditForm = (vehicle) => {
         const tempVehicleArr=initVehicles.filter(item => item.id!==vehicle.id);
         tempVehicleArr.push(vehicle)
  
         setInitVehicles(tempVehicleArr)
         setVehicle(vehicle)
         setEditMode(false)
      }
      
    const contextValue={
          initVehicles,
          vehicle,
          setVehicle,
          category,
          editMode,
          setEditMode,
          openDialog,
          setOpenDialog,
          vehicleStatus,
          vehiclesByStatus,
          onItemCreate,
          onCatSelect,
          onEditItem,
          onEditForm,
          onDeleteItem,
          onItemSelect
      }

    return ( 
        <VehicleContext.Provider value={contextValue}>
            {children}
        </VehicleContext.Provider>
     );
}
