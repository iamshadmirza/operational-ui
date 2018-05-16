import Series from "../series";
import { AreaRendererAccessors, D3Selection, Datum, EventBus, RendererAccessor, RendererClass, RendererType, SingleRendererOptions, State } from "../../typings";
export declare type Options = SingleRendererOptions<AreaRendererAccessors>;
declare class Area implements RendererClass<AreaRendererAccessors> {
    closeGaps: RendererAccessor<boolean>;
    color: RendererAccessor<string>;
    data: Datum[];
    el: D3Selection;
    events: EventBus;
    interpolate: RendererAccessor<any>;
    options: Options;
    series: Series;
    state: State;
    type: RendererType;
    xIsBaseline: boolean;
    x: RendererAccessor<number | Date>;
    x0: RendererAccessor<number>;
    x1: RendererAccessor<number>;
    xScale: any;
    y: RendererAccessor<number | Date>;
    y0: RendererAccessor<number>;
    y1: RendererAccessor<number>;
    yScale: any;
    constructor(state: State, events: EventBus, el: D3Selection, data: Datum[], options: Options, series: Series);
    update(data: Datum[], options: Options): void;
    draw(): void;
    close(): void;
    dataForAxis(axis: "x" | "y"): any[];
    private appendSeriesGroup(el);
    private setAxisScales();
    private assignAccessors(customAccessors);
    private addMissingData();
    private updateClipPath();
    private isDefined(d);
    private createAreaPath(attributes);
    private startPath(data);
    private path(data);
    private startClipPath(data);
    private clipPath(data);
}
export default Area;
