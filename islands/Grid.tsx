import { Component, createRef } from "preact";

import { AllCommunityModule, ModuleRegistry } from 'npm:ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);

import { createGrid, GridApi } from "npm:ag-grid-community";
import { ICar, gridOptions } from './options.ts';

export default class App extends Component {
  div =  createRef<HTMLDivElement>();
  grid!: GridApi<ICar>;

  override componentDidMount() {
    this.grid = createGrid(this.div.current!, gridOptions);
  }

  render() {
    return (
      <>
        <h1>AG-GRID Component</h1>
        <div class="grid" ref={this.div} style="width:1024px; height:800px"></div>
      </>
    );
  }
}
