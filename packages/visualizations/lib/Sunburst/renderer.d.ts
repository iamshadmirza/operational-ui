import { IEvents, IObject, IState, TD3Selection, TDatum, TStateWriter } from "./typings";
import "d3-transition";
declare class Renderer {
    angleScale: any;
    arc: any;
    children: (d: TDatum) => TDatum[];
    color: (d: TDatum) => string;
    currentTranslation: [number, number];
    data: TDatum[];
    drawn: boolean;
    el: TD3Selection;
    events: IEvents;
    mouseOverDatum: TDatum;
    name: (d: TDatum) => string;
    previous: TDatum[];
    radiusScale: any;
    radius: number;
    state: IState;
    stateWriter: TStateWriter;
    topNode: TDatum;
    total: number;
    value: (d: TDatum) => number;
    zoomNode: TDatum;
    constructor(state: IState, stateWriter: TStateWriter, events: IEvents, el: TD3Selection);
    assignAccessors(): void;
    hasData(): boolean;
    draw(): void;
    initialDraw(): void;
    updateDraw(): void;
    exit(arcs: TD3Selection, duration: number, hidden: boolean): void;
    enterAndUpdate(arcs: TD3Selection, duration: number, hidden: boolean): void;
    onClick(payload: IObject): void;
    zoomOut(payload: IObject): void;
    onMouseOver(d: TDatum, el: Element): void;
    highlightPath(d: TDatum, el: Element): void;
    onMouseLeave(d: TDatum, el: Element): any;
    compute(): void;
    endAngle(d: TDatum): number;
    prepareData(): void;
    assignColors(node: any): void;
    hoverOuter(radius: number): number;
    computeTranslate(): [number, number];
    translateBack(point: [number, number]): [number, number];
    isSibling(d1: TDatum, d2: TDatum): boolean;
    isEqual(d1: TDatum, d2: TDatum): boolean;
    findSiblings(data: TDatum[], d: TDatum): TDatum[];
    findAncestor(data: TDatum[], d: TDatum): TDatum;
    findDatum(data: TDatum[], d: TDatum): TDatum;
    arcTween(d: TDatum): (t: number) => string;
    removeArcTween(d: TDatum): (t: number) => string;
    labelTranslate(d: TDatum): string;
    translateString(values: [number, number]): string;
}
export default Renderer;
