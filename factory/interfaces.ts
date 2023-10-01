export interface HttpAdapter {
    get(): void;
    post(): void;
    put(): void;
    delete(): void;
}

export interface HttpAdapterFactory {
    makeAdapter(): HttpAdapter;
}