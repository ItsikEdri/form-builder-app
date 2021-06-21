# agents-form-builder
UI for creating/building form structure 
## Installation
1. clone this repo
2. npm install
3. npm start
- In case you get this error: "Property 'placeholder' does not exist on type 'DraggableProvided'"
  - open this file: ...\form-builder-app\form-builder-app\node_modules\@types\react-beautiful-dnd
  - add to DraggableProvided (line 657-662) the following property: --- `placeholder?: React.ReactElement<HTMLElement> | null;` ---
  - the inteface should look like the following:
      _`export interface DraggableProvided {
        __innerRef(element?: HTMLElement | null): any;
        __draggableProps: DraggableProvidedDraggableProps;
        __placeholder?: React.ReactElement<HTMLElement> | null;
        __dragHandleProps?: DraggableProvidedDragHandleProps;
    _}`


