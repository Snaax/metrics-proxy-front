import http from "../http-common";

class MetricsService {
  getUp() {
    return http.get("/metrics/up");
  }

  getUpById(id) {
    return http.get(`/metrics/up?id=${id}`);
  }

}

export default new MetricsService();