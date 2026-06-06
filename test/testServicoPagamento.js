import assert from 'node:assert';
import { ServicoDePagamento } from '../src/servicoPagamento.js';

describe('Testes do módulo de pagamento', function () {

    describe('Método pagar', function () {

        it('Deve criar pagamento com categoria "cara" quando valor for maior que 100', function () {

            // Arrange
            const servicoDePagamento = new ServicoDePagamento();

            // Act
            servicoDePagamento.pagar(
                '0987-7656-3475',
                'Samar',
                156.87
            );

            const resultado =
                servicoDePagamento.consultarUltimoPagamento();

            // Assert
            assert.deepEqual(resultado, {
                codigoBarras: '0987-7656-3475',
                empresa: 'Samar',
                valor: 156.87,
                categoria: 'cara'
            });

        });

        it('Deve criar pagamento com categoria "padrão" quando valor for menor ou igual a 100', function () {

            // Arrange
            const servicoDePagamento = new ServicoDePagamento();

            // Act
            servicoDePagamento.pagar(
                '1234-5678-9999',
                'Corsan',
                80
            );

            const resultado =
                servicoDePagamento.consultarUltimoPagamento();

            // Assert
            assert.deepEqual(resultado, {
                codigoBarras: '1234-5678-9999',
                empresa: 'Corsan',
                valor: 80,
                categoria: 'padrão'
            });

        });

    });

});