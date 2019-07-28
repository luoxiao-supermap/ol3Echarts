import { bindAll, removeNode } from './utils';
import formatGeoJSON from './utils/formatGeoJSON';
declare const obj: any;
declare type Nullable<T> = T | null;
declare type NoDef<T> = T | undefined;
interface OptionsTypes {
    source?: string | object;
    destination?: string | object;
    forcedRerender?: boolean;
    forcedPrecomposeRerender?: boolean;
    hideOnZooming?: boolean;
    hideOnMoving?: boolean;
    hideOnRotating?: boolean;
    convertTypes?: string[] | number[];
    insertFirst?: boolean;
    stopEvent?: boolean;
    [key: string]: any;
}
declare class EChartsLayer extends obj {
    static formatGeoJSON: typeof formatGeoJSON;
    static bind: (func: Function, context: any, ...args: any[]) => Function;
    static merge: (a: any, b: any) => any;
    static uuid: () => string;
    static bindAll: typeof bindAll;
    static arrayAdd: (array: any[], item: any) => any[];
    static removeNode: typeof removeNode;
    static isObject: (value: any) => boolean;
    private _chartOptions;
    private _isRegistered;
    private _incremental;
    private _coordinateSystem;
    private coordinateSystemId;
    private readonly _options;
    private _initEvent;
    $chart: Nullable<any>;
    $container: NoDef<HTMLElement>;
    _map: any;
    constructor(chartOptions?: NoDef<Nullable<object>>, options?: NoDef<Nullable<OptionsTypes>>, map?: any);
    appendTo(map: any): void;
    getMap(): any;
    setMap(map: any): void;
    getChartOptions(): object | undefined | null;
    setChartOptions(options?: object): this;
    appendData(data: any, save?: boolean | undefined | null): this;
    clear(): void;
    remove(): void;
    show(): void;
    hide(): void;
    isVisible(): boolean | undefined;
    showLoading(): void;
    hideLoading(): void;
    setZIndex(zIndex: string | number | null): void;
    getZIndex(): string | null | undefined;
    setVisible(visible: boolean): void;
    render(): void;
    redraw(): void;
    updateViewSize(size: number[]): void;
    private onResize;
    private onZoomEnd;
    private onDragRotateEnd;
    private onMoveStart;
    private onMoveEnd;
    private onCenterChange;
    private handleMapChanged;
    private createLayerContainer;
    private bindEvent;
    private unBindEvent;
    private clearAndRedraw;
    private registerMap;
    private convertData;
    private getCoordinateSystem;
    dispatchEvent(...args: any[]): any;
    set(...args: any[]): any;
    get(...args: any[]): any;
    unset(...args: any[]): any;
    on(...args: any[]): any;
    un(...args: any[]): any;
}
export default EChartsLayer;
