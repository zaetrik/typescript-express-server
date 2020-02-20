interface Services {
  apiService: ApiService;
}

interface ApiService {
  getAllDataFromRepository: () => Promise<any[]>;
}
