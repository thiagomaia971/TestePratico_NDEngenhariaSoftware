/// <reference path="../../Scripts/jquery.d.ts" />

export abstract class IRepository<T> {

    public abstract getAll(): JQueryPromise<T>;
    public abstract getSingle(id: number): T;
    public abstract add(entity: T): void;
    public abstract delete(entity: T): void;
    public abstract delete(id: number): void;
    
}