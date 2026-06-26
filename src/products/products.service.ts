import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  subscriptions(): string {
    return 'assinaturas ativas';
  }

  cancellations(): string {
    return 'cria cancelamento';
  }

  subscriptions(id): string {
    return 'detalhe do cancelamento + outcome';
  }
}