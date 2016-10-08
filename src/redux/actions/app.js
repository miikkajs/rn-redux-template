export const actions = Object.freeze({
    NAVIGATE: 'NAVIGATE',
    PUSH_ROUTE: 'PUSH_ROUTE',
    POP_ROUTE: 'POP_ROUTE'
});

export const navigate = route => ({type: actions.NAVIGATE, route: route});