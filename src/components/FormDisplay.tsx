import React from "react";
import {DragDropContext,Draggable,Droppable,DroppableProvided,DraggableLocation,DropResult,DroppableStateSnapshot, DraggableProvided, DraggableStateSnapshot} from 'react-beautiful-dnd';
import {IconButton, Menu, MenuItem} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const ITEM_HEIGHT = 48;
interface IMoveResult {
  droppable: React.ReactElement<{}, string | React.JSXElementConstructor<any>>[];
  droppable2: React.ReactElement<{}, string | React.JSXElementConstructor<any>>[];
}
interface IFormDisplay {
  components: React.ReactElement<{}, string | React.JSXElementConstructor<any>>[];
  selected: React.ReactElement<{}, string | React.JSXElementConstructor<any>>[];
  formName: string;
  category: string;
  description: string;
}

const reorder = (list: React.ReactElement<{}, string | React.JSXElementConstructor<any>>[], startIndex: number, endIndex: number): React.ReactElement<{}, string | React.JSXElementConstructor<any>>[] => {
  
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};


/**
 * Moves an item from one list to another list.
 */
 const move = (source: React.ReactElement<{}, string | React.JSXElementConstructor<any>>[], destination: React.ReactElement<{}, string | React.JSXElementConstructor<any>>[], droppableSource:DraggableLocation, droppableDestination:DraggableLocation):IMoveResult | any => {
  const sourceClone = [...source];
  const destClone = [...destination];
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

   const result = {};
   //@ts-ignore
   result[droppableSource.droppableId] = sourceClone;
    //@ts-ignore
  result[droppableDestination.droppableId] = destClone;

  return result;
};

var grid: number =10;

const getItemStyle = (draggableStyle: any, isDragging: boolean,grid:number):{} => ({
  userSelect: 'none',
  padding: 2*grid,
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? 'azure' : 'white',
  ...draggableStyle
});

const getListStyle = (isDraggingOver: boolean):{} => ({
  background: isDraggingOver ? 'Ivory' : 'white',
  padding: grid,
  width: 635,
  minHeight: 800,
});

const FormDisplay:React.FC<IFormDisplay> = ({components,formName,category,description,selected}) => {
  
  grid = components.length;
  const id2List = {
    droppable: 'components',
    droppable2: 'selected'
  };
  var thisState = {
    components: components,
    selected: selected,
    formName: "",
    category: "",
    description: ""
  };
 
  const getList = (id: string): React.ReactElement<{}, string | React.JSXElementConstructor<any>>[] => {
    
    
    //@ts-ignore
    return thisState[id2List[id]];
  }

   
   const onDragEnd = (result: DropResult) => {
   
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const components = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );
      let state: IFormDisplay = { ...thisState };
      if (source.droppableId === "droppable2") {
        state = { ...thisState, selected: selected };
      } else if (source.droppableId === "droppable") {
        state = {...thisState, components}
      }
    
      thisState = state;
    
    } else {
      const resultFromMove:IMoveResult = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );
    
      thisState= {
        components: resultFromMove.droppable,
        selected: resultFromMove.droppable2,
        formName: "",
        category: "",
        description:""
      };
    }
  }

  const options = ['Add Attribute','Add Style','Add Validation','Delete'];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    //logic for options
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    <h4>Form Display</h4>
    <h5>{formName}</h5>
    <h6>{category}</h6>
    <p>{description}</p>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided:DroppableProvided, snapshot:DroppableStateSnapshot) => (
              <div className="well pad centered" ref={provided.innerRef} {...provided.droppableProps} style={getListStyle(snapshot.isDraggingOver)}>
                  {thisState.components.map((component, index) =>
                    <Draggable key={index} draggableId={index.toString()} index={index}>
                      {(providedDraggable: DraggableProvided, snapshotDraggable: DraggableStateSnapshot) => (
                        <div>
                          <div ref={providedDraggable.innerRef} {...providedDraggable.draggableProps} {...providedDraggable.dragHandleProps}
                            style={getItemStyle(
                              providedDraggable.draggableProps.style,
                              snapshotDraggable.isDragging,
                              grid
                            )}
                          >
                          <div className="row">
                            <div className="col-md-11"> {component}</div>
                            <div className="col-md-1">
                                <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
                                  <MoreVertIcon />
                                </IconButton>
                                <Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}
                                  PaperProps={{
                                    style: {
                                      maxHeight: ITEM_HEIGHT * 4.5,
                                      width: '20ch',
                                    },
                                  }}
                                >
                                  {options.map((option) => (
                                    <MenuItem key={option} selected={option === 'Add Attribute'} onClick={handleClose}>
                                      {option}
                                      <hr/>
                                    </MenuItem>
                                  ))}
                                </Menu>
                            </div>
                        </div>
                      </div>
                      {providedDraggable.placeholder}
                    </div>
                      )}
        </Draggable>
        )}
        {provided.placeholder}
      </div>
    )}
    </Droppable>
  </DragDropContext>
    </div>
  );
}

export default FormDisplay;