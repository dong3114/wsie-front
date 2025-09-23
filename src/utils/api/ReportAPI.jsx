import WSIE_API from "./BasicAPI"

export const Reports = {
    getReports: () => {
        return WSIE_API.get("/api/reports/summary")
            .then(({data}) => data);
    }
}
