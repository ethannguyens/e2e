
const runner = function runner(specs, sites, option) {
    specs.map(spec => {
        sites.map(site => {
            spec(site, option);
        })
    });
};

module.export = runner;