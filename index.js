var invoiceUrlStart = $('#invoice-url-start').attr('weg-url');
var invoiceUrlEnd = $('#invoice-url-end').attr('weg-url');

var steppersIcons = {
    P_CONFIRM: 'ion-ios7-cart-outline',
    P_PRODUCTION: 'ion-settings',
    P_PROCESS: 'ion-checkmark-round',
    P_BILLING: 'ion-social-usd',
    P_PICKING: 'ion-bag',
    P_TRANSPORTATION: 'ion-arrow-up-c',
    P_DELIVERY: 'ion-ios7-flag',
    N_CLOCK: 'ion-clock'
};
const orderSteps = [
    {
        "code": "P_CONFIRM",
        "description": "Produto confirmado",
        "sequence": 0,
        "requiredToShow": null,
        "stepGeneralDescription": "Confirmado",
        "endTracking": null,
        "icon": steppersIcons.P_CONFIRM,
        "additionalInfo": {
            "Previsão de Estoque": "01.10.2025"
        }
    },
    {
        "code": "P_PRODUCTION",
        "description": "Produto em produção",
        "sequence": 1, // Novo passo inserido
        "requiredToShow": null,
        "stepGeneralDescription": "Produzido",
        "endTracking": null,
        "icon": steppersIcons.P_PRODUCTION,
        "additionalInfo": {
            "Ordem de Produção": "OP-123456"
        }
    },
    {
        "code": "P_PROCESS",
        "description": "Produto processado",
        "sequence": 2, // Atualizado para respeitar a ordem correta
        "requiredToShow": null,
        "stepGeneralDescription": "Processado",
        "endTracking": null,
        "icon": steppersIcons.P_PROCESS,
        "additionalInfo": {
            "Documento de Transporte": "1008873413"
        }
    },
    {
        "code": "P_BILLING",
        "description": "Produto faturado",
        "sequence": 3,
        "requiredToShow": null,
        "stepGeneralDescription": "Faturado",
        "endTracking": null,
        "icon": steppersIcons.P_BILLING,
        "additionalInfo": {
            "Documento de Faturamento": "0941013106",
            "Número Nota Fiscal": "003797308-1"
        }
    },
    {
        "code": "P_PICKING",
        "description": "Produto coletado",
        "sequence": 4,
        "requiredToShow": null,
        "stepGeneralDescription": "Coletado",
        "endTracking": null,
        "icon": steppersIcons.P_PICKING,
        "additionalInfo": {
            "Documento de Transporte": "1008873413",
            "Nome Transportadora": "TRANSJOI TRANSPORTES LTDA"
        }
    },
    {
        "code": "P_TRANSPORTATION",
        "description": "Produto transportado",
        "sequence": 5,
        "requiredToShow": null,
        "stepGeneralDescription": "Transportado",
        "endTracking": null,
        "icon": steppersIcons.P_TRANSPORTATION,
        "additionalInfo": {
            "Documento de Transporte": "1008873413"
        }
    },
    {
        "code": "P_DELIVERY",
        "description": "Produto entregue",
        "sequence": 6,
        "requiredToShow": true,
        "stepGeneralDescription": "Entregue",
        "endTracking": null,
        "icon": steppersIcons.P_DELIVERY,
        "additionalInfo": {}
    }
];

const items = [
    {
        id: "ITEM-16252855",
        lineNumber: "10",
        code: "16252855",
        description: "BOBINA DE DISPARO BD 220-240 Vca/250 Vcc PARA DISJUNTOR CAIXA MOLDADA ACW100-800",
        unit: "UN",
        quantity: 12,
        status: "in-progress",
        statusText: "Em Andamento",
        shipments: [
            {
                id: "REM-001",
                name: "Entrega #1008884191",
                status: "completed",
                statusText: "Entregue",
                date: "23/01/2025",
                unit: "UN",
                quantity: 1,
                isDelayed: false,
                details: "Entregue em 23/01/2025 com atraso",
                progressStep: 7,
                history: [
                    {
                        "code": "P_DELIVERY",
                        "description": "Produto entregue",
                        "hidden": null,
                        "dateTime": "23/01/2025 13:45:00",
                        "document": null,
                        "quantity": null,
                        "noteList": null,
                        "dates": {
                            "previsto": "20/01/2025",
                            "revisado": "-",
                            "realizado": "23/01/2025"
                        }
                    },
                    {
                        "code": "P_TRANSPORTATION",
                        "description": "Produto transportado",
                        "hidden": null,
                        "dateTime": "23/01/2025 13:45:00",
                        "document": null,
                        "quantity": null,
                        "noteList": [
                            {
                                "code": "TRACKING_NUMBER",
                                "description": "Documento de Transporte:",
                                "content": "1008884191"
                            }
                        ],
                        "dates": {
                            "previsto": "20/01/2025",
                            "revisado": "-",
                            "realizado": "23/01/2025"
                        }
                    },
                    {
                        "code": "P_PICKING",
                        "description": "Produto coletado",
                        "hidden": null,
                        "dateTime": "16/01/2025 19:19:35",
                        "document": null,
                        "quantity": null,
                        "noteList": [
                            {
                                "code": "TRACKING_NUMBER",
                                "description": "Documento de Transporte:",
                                "content": "1008884191"
                            },
                            {
                                "code": "TRANSP_NAME",
                                "description": "Nome Transportadora:",
                                "content": "TRANSJOI TRANSPORTES LTDA"
                            },
                            {
                                "code": "TRACKING_URL",
                                "description": "Rastreio da transportadora: ",
                                "content": "https://movement.project44.com/share/834d4a2c-2641-40b0-b4bd-4d8f32101677"
                            }
                        ],
                        "dates": {
                            "previsto": "15/01/2025",
                            "revisado": "-",
                            "realizado": "16/01/2025"
                        }
                    },
                    {
                        "code": "P_BILLING",
                        "description": "Produto faturado",
                        "hidden": null,
                        "dateTime": "16/01/2025 12:13:13",
                        "document": null,
                        "quantity": null,
                        "noteList": [
                            {
                                "code": "NF_NUMBER",
                                "description": "Documento de Faturamento:",
                                "content": "0941039197"
                            },
                            {
                                "code": "INVOICE",
                                "description": "Número Nota Fiscal:",
                                "content": "003802675-1"
                            }
                        ],
                        "dates": {
                            "previsto": "15/01/2025",
                            "revisado": "-",
                            "realizado": "16/01/2025"
                        }
                    },
                    {
                        "code": "P_PROCESS",
                        "description": "Produto processado",
                        "hidden": null,
                        "dateTime": "16/01/2025 12:13:03",
                        "document": null,
                        "quantity": null,
                        "noteList": [
                            {
                                "code": "TRACKING_NUMBER",
                                "description": "Documento de Transporte:",
                                "content": "1008884191"
                            }
                        ],
                        "dates": {
                            "previsto": "15/01/2025",
                            "revisado": "-",
                            "realizado": "16/01/2025"
                        }
                    },
                    {
                        "code": "P_PRODUCTION",
                        "description": "Produzido",
                        "hidden": null,
                        "dateTime": "13/01/2025 08:23:01",
                        "document": null,
                        "quantity": 1,
                        "noteList": [],
                        "dates": {
                            "previsto": "14/01/2025",
                            "revisado": "-",
                            "realizado": "15/01/2025"
                        }
                    },
                    {
                        "code": "P_CONFIRM",
                        "description": "Produto confirmado",
                        "hidden": null,
                        "dateTime": "13/01/2025 08:23:01",
                        "document": null,
                        "quantity": 1,
                        "noteList": [
                            {
                                "code": "PREVISION_DELIVERY",
                                "description": "Previsão de entrega",
                                "content": "20/01/2025"
                            },
                        ],
                        "dates": {
                            "previsto": "-",
                            "revisado": "-",
                            "realizado": "13/01/2025"
                        }
                    }
                ]
            },
            {
                id: "REM-002",
                name: "Entrega pendente",
                status: "delayed",
                statusText: "Atrasado",
                date: "21/01/2025",
                unit: "UN",
                quantity: 11,
                isDelayed: false,
                details: "Produção está atrasada",
                progressStep: 1,
                history: [
                    {
                        "code": "P_DELIVERY",
                        "description": "Produto entregue",
                        "hidden": null,
                        "document": null,
                        "quantity": null,
                        "noteList": null,
                        "dates": {
                            "previsto": "04/02/2025",
                            "revisado": "-",
                            "realizado": "-"
                        }
                    },
                    {
                        "code": "P_TRANSPORTATION",
                        "description": "Produto transportado",
                        "hidden": null,
                        "document": null,
                        "quantity": null,
                        "noteList": [
                        ],
                        "dates": {
                            "previsto": "04/02/2025",
                            "revisado": "-",
                            "realizado": ""
                        }
                    },
                    {
                        "code": "P_PICKING",
                        "description": "Produto coletado",
                        "hidden": null,
                        "document": null,
                        "quantity": null,
                        "noteList": [
                        ],
                        "dates": {
                            "previsto": "31/01/2025",
                            "revisado": "-",
                            "realizado": "-"
                        }
                    },
                    {
                        "code": "P_BILLING",
                        "description": "Produto faturado",
                        "hidden": null,
                        "document": null,
                        "quantity": null,
                        "noteList": [
                        ],
                        "dates": {
                            "previsto": "31/01/2025",
                            "revisado": "-",
                            "realizado": "-"
                        }
                    },
                    {
                        "code": "P_PROCESS",
                        "description": "Produto processado",
                        "hidden": null,
                        "document": null,
                        "quantity": null,
                        "noteList": [
                        ],
                        "dates": {
                            "previsto": "31/01/2025",
                            "revisado": "-",
                            "realizado": "-"
                        }
                    },
                    {
                        "code": "P_PRODUCTION",
                        "description": "Produzido",
                        "hidden": null,
                        "dateTime": "24/01/2025 08:23:01",
                        "document": null,
                        "quantity": 11,
                        "noteList": [
                            {
                                "code": "PRODUCTION_ORDER",
                                "description": "Ordem de Produção:",
                                "content": "OP-626457"
                            }
                        ],
                        "dates": {
                            "previsto": "24/01/2025",
                            "revisado": "-",
                            "realizado": null
                        }
                    },
                    {
                        "code": "P_CONFIRM",
                        "description": "Produto confirmado",
                        "hidden": null,
                        "dateTime": "13/01/2025 08:23:01",
                        "document": null,
                        "quantity": 11,
                        "noteList": [
                            {
                                "code": "PREVISION_DELIVERY",
                                "description": "Previsão de entrega",
                                "content": "04/02/2025"
                            },
                        ],
                        "dates": {
                            "previsto": "-",
                            "revisado": "-",
                            "realizado": "13/01/2025"
                        }
                    }
                ]
            }
        ]
    },
    {
        id: "ITEM-10452204",
        lineNumber: "20",
        code: "10452204",
        description: "RELE SOBRECARGA RW27-1D3-U017 CINZA 11-17A",
        unit: "UN",
        quantity: 20,
        status: "completed",
        statusText: "Concluído",
        shipments: [
            {
                id: "REM-1008880736", // Mudar a logica disso, esta quebrando se a remessa esta igual, ou garantir que remessas sao unicas
                name: "Entrega #1008880736",
                status: "completed",
                statusText: "Entregue",
                date: "21/01/2025",
                unit: "UN",
                quantity: 20,
                isDelayed: false,
                details: "Entregue em 21/01/2025 com atraso",
                progressStep: 7,
                history: [
                    {
                        "code": "P_DELIVERY",
                        "description": "Produto entregue",
                        "hidden": null,
                        "dateTime": "21/01/2025 12:59:00",
                        "document": null,
                        "quantity": null,
                        "noteList": null,
                        "dates": {
                            "previsto": "20/01/2025",
                            "revisado": "-",
                            "realizado": "21/01/2025"
                        }
                    },
                    {
                        "code": "P_TRANSPORTATION",
                        "description": "Produto transportado",
                        "hidden": null,
                        "dateTime": "21/01/2025 12:59:00",
                        "document": null,
                        "quantity": null,
                        "noteList": [
                            {
                                "code": "TRACKING_NUMBER",
                                "description": "Documento de Transporte:",
                                "content": "1008880736"
                            }
                        ],
                        "dates": {
                            "previsto": "20/01/2025",
                            "revisado": "-",
                            "realizado": "21/01/2025"
                        }
                    },
                    {
                        "code": "P_PICKING",
                        "description": "Produto coletado",
                        "hidden": null,
                        "dateTime": "15/01/2025 18:36:17",
                        "document": null,
                        "quantity": null,
                        "noteList": [
                            {
                                "code": "TRACKING_NUMBER",
                                "description": "Documento de Transporte:",
                                "content": "1008880736"
                            },
                            {
                                "code": "TRANSP_NAME",
                                "description": "Nome Transportadora:",
                                "content": "TRANSJOI TRANSPORTES LTDA"
                            },
                            {
                                "code": "TRACKING_URL",
                                "description": "Rastreio da transportadora: ",
                                "content": "https://movement.project44.com/share/834d4a2c-2641-40b0-b4bd-4d8f32101677"
                            }
                        ],
                        "dates": {
                            "previsto": "15/01/2025",
                            "revisado": "-",
                            "realizado": "15/01/2025"
                        }
                    },
                    {
                        "code": "P_BILLING",
                        "description": "Produto faturado",
                        "hidden": null,
                        "dateTime": "15/01/2025 15:08:43",
                        "document": null,
                        "quantity": null,
                        "noteList": [
                            {
                                "code": "NF_NUMBER",
                                "description": "Documento de Faturamento:",
                                "content": "0941029679"
                            },
                            {
                                "code": "INVOICE",
                                "description": "Número Nota Fiscal:",
                                "content": "003801020-1"
                            }
                        ],
                        "dates": {
                            "previsto": "15/01/2025",
                            "revisado": "-",
                            "realizado": "15/01/2025"
                        }
                    },
                    {
                        "code": "P_PROCESS",
                        "description": "Produto processado",
                        "hidden": null,
                        "dateTime": "15/01/2025 15:08:22",
                        "document": null,
                        "quantity": null,
                        "noteList": [
                            {
                                "code": "TRACKING_NUMBER",
                                "description": "Documento de Transporte:",
                                "content": "1008880736"
                            }
                        ],
                        "dates": {
                            "previsto": "15/01/2025",
                            "revisado": "-",
                            "realizado": "15/01/2025"
                        }
                    },
                    {
                        "code": "P_PRODUCTION",
                        "description": "Produzido",
                        "hidden": null,
                        "dateTime": "13/01/2025 08:23:01",
                        "document": null,
                        "quantity": 20,
                        "noteList": [],
                        "dates": {
                            "previsto": "14/01/2025",
                            "revisado": "-",
                            "realizado": "14/01/2025"
                        }
                    },
                    {
                        "code": "P_CONFIRM",
                        "description": "Produto confirmado",
                        "hidden": null,
                        "dateTime": "13/01/2025 08:23:01",
                        "document": null,
                        "quantity": 20,
                        "noteList": [
                            {
                                "code": "PRODUCTION_ORDER",
                                "description": "Pravisão de entrega:",
                                "content": "20/01/2025"
                            },
                        ],
                        "dates": {
                            "previsto": "-",
                            "revisado": "-",
                            "realizado": "13/01/2025"
                        }
                    }
                ]
            }
        ]
    },
    {
        id: "ITEM-10583680",
        lineNumber: "30",
        code: "10583680",
        description: "DISJUNTOR ACW250H-ATU200-3",
        unit: "UN",
        quantity: 4,
        status: "completed",
        statusText: "Concluído",
        shipments: []
    },
    {
        id: "ITEM-11111344",
        lineNumber: "40",
        code: "11111344",
        description: "BOBINA DE DISPARO BD 220-240 Vca/250 Vcc PARA DISJUNTOR CAIXA MOLDADA ACW100-800",
        unit: "UN",
        quantity: 4,
        status: "completed",
        statusText: "Concluído",
        shipments: []
    },
    {
        id: "ITEM-11424575",
        lineNumber: "50",
        code: "11424575",
        description: "MODULO DE FUGA A TERRA FT 220-460V50/60Hz 83481172603 PARA DISJUNTOR CAIXA MOLDADA ACW250",
        unit: "UN",
        quantity: 4,
        status: "completed",
        statusText: "Concluído",
        shipments: []
    }
];
$(document).ready(function () {
function checkIfDelayed(dates) {
    if (!dates || !dates.realizado || !dates.previsto) return false;
    if (typeof dates.realizado === 'string' && typeof dates.previsto === 'string') {
        const realizadoParts = dates.realizado.split('/');
        const previstoParts = dates.previsto.split('/');

        const realizadoDate = new Date(
            parseInt('20' + realizadoParts[2]),
            parseInt(realizadoParts[1]) - 1,
            parseInt(realizadoParts[0])
        );

        const previstoDate = new Date(
            parseInt('20' + previstoParts[2]),
            parseInt(previstoParts[1]) - 1,
            parseInt(previstoParts[0])
        );

        return realizadoDate > previstoDate;
    }

    return dates.realizado > dates.previsto;
}

function createTimeline(shipmentId, hasShipment) {
    return `
                    <div class="card">
                        <div class="card-header">
                            ${hasShipment > 1 ? `Remessa` : `Timeline`}
                        </div>
                        <div class="card-content">
                            <div class="timeline-vertical" id="timeline-${shipmentId}"></div>
                        </div>
                    </div>
                `;
}

function toggleHistory(historyId) {
    const $historySection = $(`#history-${historyId}`);
    const $historyToggle = $(`#history-toggle-${historyId}`);

    if ($historySection.length && $historyToggle.length) {
        $historySection.toggleClass('active');
        $historyToggle.toggleClass('active');
        console.log(`Toggling history for ${historyId}. Section exists: ${$historySection.length > 0}, Toggle exists: ${$historyToggle.length > 0}`);
    } else {
        console.error(`Could not find elements for history-${historyId}`);
    }
}

function populateTimeline(shipmentId) {
    const $timelineContainer = $(`#timeline-${shipmentId}`);
    $timelineContainer.empty();
    let currentShipment = null;
    $.each(items, function (_, item) {
        $.each(item.shipments, function (_, shipment) {
            if (shipment.id === shipmentId) {
                currentShipment = shipment;
                return false; // Break the inner loop
            }
        });
        if (currentShipment) return false; // Break the outer loop
    });

    if (!currentShipment) return;

    const stepsWithStatus = [];
    let lastCompletedStep = null;
    $.each(orderSteps, function (_, step) {
        let status = 0; // 0: pendente, 1: em andamento, 2: concluído
        let historyEntry = null;
        if (currentShipment.history) {
            $.each(currentShipment.history, function (_, entry) {
                if (entry.code === step.code) {
                    historyEntry = entry;
                    return false; // Break the loop
                }
            });
        }

        // Determina o status com base na progressStep da remessa
        const stepIndex = step.sequence;

        if (stepIndex < currentShipment.progressStep) {
            // Passo concluído
            status = 2;
            lastCompletedStep = step; // Salva o último status concluído
        } else if (stepIndex === currentShipment.progressStep) {
            // Passo atual (em andamento)
            status = 1;
        } else {
            // Passo futuro (pendente)
            status = 0;
        }

        // Adiciona o passo com seu status e dados do histórico
        stepsWithStatus.push({
            ...step,
            status,
            historyEntry
        });
    });

    const reversedSteps = stepsWithStatus.slice().reverse();

    // Preenche a timeline vertical com os ícones, datas e informações
    $.each(reversedSteps, function (index, step) {
        let statusText, statusClass, dotClass, contentClass;

        if (step.status === 2) {
            // Passo concluído
            const isDelayed = step.historyEntry && step.historyEntry.dates ?
                checkIfDelayed(step.historyEntry.dates) : false;
            statusText = isDelayed ? "Atrasado" : "No Prazo";
            statusClass = isDelayed ? "delayed" : "on-time";
            dotClass = ""; // Sem classe adicional, usará a cor padrão azul
            contentClass = "";
        } else if (step.status === 1) {
            // Passo em andamento - amarelo
            statusText = "Em Andamento";
            statusClass = "in-progress";
            dotClass = "in-progress";
            contentClass = "";
        } else {
            // Passo pendente - cinza
            statusText = "Pendente";
            statusClass = "pending";
            dotClass = "pending";
            contentClass = "pending";
        }

        // Gera o HTML para as datas
        let datesHTML = '';

        if (step.status === 0) {
            // Passo pendente - mostra apenas a data prevista (se disponível)
            const previsto = step.historyEntry && step.historyEntry.dates ?
                step.historyEntry.dates.previsto : "Pendente";

            datesHTML = `
                            <div class="date-item">
                                <span class="date-label">Previsto:</span>
                                <span class="date-value">${previsto}</span>
                            </div>
                            <div class="date-item">
                                <span class="date-label">Revisado:</span>
                                <span class="date-value pending">-</span>
                            </div>
                            <div class="date-item">
                                <span class="date-label">Realizado:</span>
                                <span class="date-value pending">-</span>
                            </div>
                        `;
        } else if (step.status === 1) {
            const previsto = step.historyEntry && step.historyEntry.dates ?
                step.historyEntry.dates.previsto : "Pendente";
            const revisado = step.historyEntry && step.historyEntry.dates ?
                step.historyEntry.dates.revisado : "Pendente";

            datesHTML = `
                            <div class="date-item">
                                <span class="date-label">Previsto:</span>
                                <span class="date-value">${previsto}</span>
                            </div>
                            <div class="date-item">
                                <span class="date-label">Revisado:</span>
                                <span class="date-value">${revisado}</span>
                            </div>
                            <div class="date-item">
                                <span class="date-label">Realizado:</span>
                                <span class="date-value pending">Em andamento</span>
                            </div>
                        `;
        } else {
            // Passo concluído - mostra todas as datas
            const previsto = step.historyEntry && step.historyEntry.dates ?
                step.historyEntry.dates.previsto : "Pendente";
            const revisado = step.historyEntry && step.historyEntry.dates ?
                step.historyEntry.dates.revisado : "Pendente";
            const realizado = step.historyEntry && step.historyEntry.dates ?
                step.historyEntry.dates.realizado : "Pendente";

            const isDelayed = step.historyEntry && step.historyEntry.dates ?
                checkIfDelayed(step.historyEntry.dates) : false;

            datesHTML = `
                            <div class="date-item">
                                <span class="date-label">Previsto:</span>
                                <span class="date-value">${previsto}</span>
                            </div>
                            <div class="date-item">
                                <span class="date-label">Revisado:</span>
                                <span class="date-value">${revisado}</span>
                            </div>
                            <div class="date-item">
                                <span class="date-label">Realizado:</span>
                                <span class="date-value ${isDelayed ? 'delayed' : ''}">${realizado}</span>
                            </div>
                        `;
        }

        // Gera o HTML para o histórico
        let historyHTML = '';
        let historyId = `history-${shipmentId}-${step.code}`;
        let historyIconHTML = '';
        let isLastCompleted = lastCompletedStep && lastCompletedStep.code === step.code;
        if (step.status === 2 && step.historyEntry) {
            historyIconHTML = `
                    <i class="ion-chevron-up history-toggle-icon ${isLastCompleted ? 'active' : ''}" id="history-toggle-${historyId}"></i>
                `;

            let notesHTML = '';
            if (step.historyEntry?.noteList?.length > 0) {
                console.log(step.historyEntry);

                $.each(step.historyEntry.noteList, function (_, note) {
                    if (note.code === "INVOICE") {
                        notesHTML += `
                <p class="history-text"><strong>${note.description}</strong>
                    <a href="${invoiceUrlStart}${note.content}${invoiceUrlEnd}" target="_blank">${note.content}</a>
                </p>`;
                    } else if (note.code === "TRACKING_URL") {
                        notesHTML += `
                <p class="history-text"><strong>${note.description}</strong>
                    <a href="${note.content}" target="_blank">Acesse o site aqui <i class="search-outline ion-search"></i></a>
                </p>`;
                    } else {
                        notesHTML += `
                <p class="history-text"><strong>${note.description}</strong> ${note.content}</p>`;
                    }
                });
            }


            historyHTML = `
                            <div class="history-section ${isLastCompleted ? 'active' : ''}" id="history-${historyId}">
                                <div class="history-item">
                                    <div class="history-icon">
                                        <i class="${step.icon}"></i>
                                    </div>
                                    <div class="history-content">
                                        <div class="history-datetime">${step.historyEntry.dateTime}</div>
                                        <p class="history-text">${step.historyEntry.description}</p>
                                        ${step.historyEntry.quantity ? `<p class="history-text"><strong>Quantidade:</strong> ${step.historyEntry.quantity}</p>` : ""}
                                        ${step.historyEntry.document ? `<p class="history-text"><strong>Documento:</strong> ${step.historyEntry.document}</p>` : ''}
                                        ${notesHTML}
                                    </div>
                                </div>
                            </div>
                        `;
        } else {
            historyIconHTML = `<i class="${steppersIcons.N_CLOCK} history-toggle-icon disabled"></i>`;
        }

        // Cria o elemento da timeline vertical
        const $timelineStep = $('<div>', {
            class: 'timeline-step-vertical'
        });

        $timelineStep.html(`
                        <div class="timeline-dot-container">
                            <div class="timeline-dot ${dotClass}">
                                <i class="${step.icon}"></i>
                            </div>
                        </div>
                        <div class="timeline-content ${contentClass}">
                            <div class="timeline-header">
                                <div class="timeline-title-container">
                                    <h3 class="timeline-title">${step.stepGeneralDescription}</h3>
                                    <div class="display-flex">
                                        <span class="timeline-status ${statusClass}">${statusText}</span>
                                        <div class="timeline-dates">
                                            ${datesHTML}
                                        </div>
                                    </div>    
                                </div>
                                ${historyIconHTML}
                            </div>
                            ${historyHTML}
                        </div>
                    `);

        $timelineContainer.append($timelineStep);
    });

    addHistoryToggleEvents();
}

function addHistoryToggleEvents() {
    $('.history-toggle-icon:not(.disabled)').each(function () {
        if (!$(this).data('event-added')) {
            const historyId = $(this).attr('id').replace('history-toggle-', '');
            $(this).on('click', function () {
                toggleHistory(historyId);
            });
            $(this).data('event-added', true);
        }
    });
}

// Função para alternar a exibição de uma remessa
function toggleShipment(shipmentId) {
    const $shipmentCard = $(`#shipment-${shipmentId}`);
    $shipmentCard.toggleClass('active');
    if ($shipmentCard.hasClass('active')) {
        populateTimeline(shipmentId);
    }
}

// Função para criar os cards de remessa para um item
function createShipmentCards(item) {
    let shipmentsHTML = '';

    $.each(item.shipments, function (_, shipment) {
        const delayedIndicator = shipment.isDelayed ?
            '<span style="color: red; margin-left: 8px;">Atrasado!</span>' : '';

        shipmentsHTML += `
                        <div class="shipment-card" id="shipment-${shipment.id}">
                            <div class="shipment-header" data-shipment-id="${shipment.id}">
                                <div class="shipment-title">
                                    <div class="shipment-icon">
                                        <i class="cube-outline"></i>
                                    </div>
                                    <div class="shipment-info">
                                        <h3 class="shipment-name">${shipment.name} ${delayedIndicator}</h3>
                                        <p class="shipment-details">${shipment.details}</p>
                                        <p class="shipment-unit">${shipment.quantity} ${shipment.unit}</p>
                                    </div>
                                </div>
                                <div class="shipment-status">
                                    <span class="status-badge ${shipment.status}">${shipment.statusText}</span>
                                    <i class="chevron-down-outline shipment-toggle"></i>
                                </div>
                            </div>
                            <div class="shipment-content">
                                ${createTimeline(shipment.id, item.shipments.length)}
                            </div>
                        </div>
                    `;
    });

    return shipmentsHTML;
}

// Função para exibir o conteúdo de um item
function showItemContent(item) {
    $('#item-content').html(`
                    <div class="item-content-header">
                        <h2 class="item-content-title">
                            <span class="item-code">${item.lineNumber} #${item.code}</span> - ${item.description}
                        </h2>
                        <p class="item-content-details">Quantidade: ${item.quantity}</p>
                    </div>
                    <div class="shipment-container">
                        ${createShipmentCards(item)}
                    </div>
                `);

    // Adiciona eventos de clique aos cabeçalhos de remessa
    $('.shipment-header').on('click', function () {
        const shipmentId = $(this).data('shipment-id');
        toggleShipment(shipmentId);
    });
}

// Função para criar a lista de itens
function createItemsList(openItem) {
    $('#items-list').empty();
    $('#item-content').html(`
        <div class="empty-state">
            <div class="empty-state-icon">
                <i name="cube-outline"></i>
            </div>
            <div class="empty-state-title">Nenhum item selecionado</div>
            <div class="empty-state-message">Selecione um item na lista à esquerda para visualizar suas remessas</div>
        </div>
    `);

    const $itemsList = $('#items-list');

    $.each(items, function (_, item) {
        const $itemEntry = $('<div>', {
            class: `item-entry`,
            id: `item-${item.lineNumber}`
        });

        $itemEntry.html(`
                        <h3 class="item-title">
                            <span class="item-code">${item.lineNumber} #${item.code}</span>
                        </h3>
                        <p class="item-details">${item.description}</p>
                        <p class="item-details">Qtd: ${item.quantity}</p>
                        <span class="item-badge ${item.status}">${item.statusText}</span>
                    `);

        $itemEntry.on('click', function () {
            $('.item-entry').removeClass('active');
            $(this).addClass('active');
            showItemContent(item);
        });
        $itemsList.append($itemEntry);
    });

    $("#item-"+openItem).click()
}
    // Inicializa a lista de itens
    createItemsList("10");
});
