// import { useTranslation } from 'react-i18next';

export const useTranslationMap = () => {
  // const { t } = useTranslation();
  //   function getProductStatus(status?: Status | null) {
  //     switch (status) {
  //       case Status.DONESELLING:
  //         return {
  //           content: t( 'product.saleStatus.done' }),
  //           color: '#979797',
  //         };
  //       case Status.STOPSELLING:
  //         return {
  //           content: t( 'product.saleStatus.sold' }),
  //           color: '#F8A81D',
  //         };
  //       case Status.FORSALE:
  //       default:
  //         return {
  //           content: t( 'product.saleStatus.sale' }),
  //           color: '#00A06A',
  //         };
  //     }
  //   }
  //   function getQuestionTypeTranslation(key?: StaticFAQType) {
  //     switch (key) {
  //       case StaticFAQType.FAQ:
  //         return t( 'customerQuestion.type.faq' });
  //       case StaticFAQType.ADV:
  //         return t( 'customerQuestion.type.adv' });
  //       default:
  //         return '';
  //     }
  //   }
  //   function getCustomerAnswerStatus(answers?: FAQAnswer[]) {
  //     if (answers && answers.length > 0) {
  //       return {
  //         content: t( 'customerQuestion.answerStatus.answer' }),
  //         color: '#00A06A',
  //       };
  //     }
  //     return {
  //       content: t( 'customerQuestion.answerStatus.pending' }),
  //       color: '#F8A81D',
  //     };
  //   }
  //   function getProductCategoryTranslation(key?: ProductCategory) {
  //     switch (key) {
  //       case ProductCategory.SELLING:
  //         return t( 'product.category.sale' });
  //       case ProductCategory.SHARING:
  //         return t( 'product.category.sharing' });
  //       case ProductCategory.TALENT:
  //         return t( 'product.category.talent' });
  //       case ProductCategory.TOGETHER:
  //         return t( 'product.category.together' });
  //       default:
  //         return '';
  //     }
  //   }
  //   function getProductStatusTranslation(status: boolean) {
  //     return status ? t( 'product.status.active' }) : t( 'product.status.deactivate' });
  //   }
  //   function getProductSellingStateTranslation(key: ProductStatus) {
  //     switch (key) {
  //       case ProductStatus.NEW:
  //         return t( 'product.detail.productState.new' });
  //       case ProductStatus.LIKE_NEW:
  //         return t( 'product.detail.productState.likeNew' });
  //       case ProductStatus.USED:
  //         return t( 'product.detail.productState.used' });
  //       default:
  //         return '';
  //     }
  //   }
  //   function getProductSellingTransactionMethodTranslation(key?: TransactionMethod) {
  //     switch (key) {
  //       case TransactionMethod.ALL:
  //         return t( 'product.detail.transactionMethod.all' });
  //       case TransactionMethod.PICKUP_AT_STORE:
  //         return t( 'product.detail.transactionMethod.store' });
  //       case TransactionMethod.SHIPPING_AGENCY:
  //         return t( 'product.detail.transactionMethod.agency' });
  //       default:
  //         return '';
  //     }
  //   }
  //   function getProductSellingPaymentConditionTranslation(key?: PaymentCondition) {
  //     switch (key) {
  //       case PaymentCondition.ALL:
  //         return t( 'product.detail.paymentCondition.all' });
  //       case PaymentCondition.SAFE:
  //         return t( 'product.detail.paymentCondition.safe' });
  //       case PaymentCondition.CARD_ALL:
  //         return t( 'product.detail.paymentCondition.card.all' });
  //       case PaymentCondition.CARD_DIRECT:
  //         return t( 'product.detail.paymentCondition.card.direct' });
  //       case PaymentCondition.CARD_PREPAID:
  //         return t( 'product.detail.paymentCondition.card.prePaid' });
  //       case PaymentCondition.CASH_ALL:
  //         return t( 'product.detail.paymentCondition.cash.all' });
  //       case PaymentCondition.CASH_DIRECT:
  //         return t( 'product.detail.paymentCondition.cash.direct' });
  //       case PaymentCondition.CASH_PREPAID:
  //         return t( 'product.detail.paymentCondition.cash.prePaid' });
  //       default:
  //         return '';
  //     }
  //   }
  //   function getProductSubCategory(mainCategory: ProductCategory, key?: Maybe<ProductSubCategory>) {
  //     switch (mainCategory) {
  //       case ProductCategory.SELLING:
  //         switch (key) {
  //           case ProductSubCategory.CLOTHES:
  //             return t( 'product.subCategory.sale.clothes' });
  //           case ProductSubCategory.ACCESSORIES:
  //             return t( 'product.subCategory.sale.accessories' });
  //           case ProductSubCategory.BEAUTY:
  //             return t( 'product.subCategory.sale.beauty' });
  //           case ProductSubCategory.PREGNANCY:
  //             return t( 'product.subCategory.sale.pregnancy' });
  //           case ProductSubCategory.BABYCARE:
  //             return t( 'product.subCategory.sale.babyCare' });
  //           case ProductSubCategory.ANIMAL:
  //             return t( 'product.subCategory.sale.animal' });
  //           case ProductSubCategory.ELECTRIC:
  //             return t( 'product.subCategory.sale.electric' });
  //           case ProductSubCategory.FOOD:
  //             return t( 'product.subCategory.sale.food' });
  //           case ProductSubCategory.INTERIO:
  //             return t( 'product.subCategory.sale.interior' });
  //           case ProductSubCategory.EQUIPMENT:
  //             return t( 'product.subCategory.sale.equipment' });
  //           case ProductSubCategory.CULTURE:
  //             return t( 'product.subCategory.sale.culture' });
  //           case ProductSubCategory.OTHERS:
  //           default:
  //             return t( 'product.subCategory.sale.others' });
  //         }
  //       case ProductCategory.TALENT:
  //         switch (key) {
  //           case ProductSubCategory.CATERING:
  //             return t( 'product.subCategory.talent.catering' });
  //           case ProductSubCategory.BEAUTY:
  //             return t( 'product.subCategory.talent.beauty' });
  //           case ProductSubCategory.PRODUCE:
  //             return t( 'product.subCategory.talent.produce' });
  //           case ProductSubCategory.EDUCATION:
  //             return t( 'product.subCategory.talent.education' });
  //           case ProductSubCategory.HEALTHCARE:
  //             return t( 'product.subCategory.talent.healthCare' });
  //           case ProductSubCategory.SPORT:
  //             return t( 'product.subCategory.talent.sport' });
  //           case ProductSubCategory.TRANSPORT:
  //             return t( 'product.subCategory.talent.transport' });
  //           case ProductSubCategory.CLEANING:
  //             return t( 'product.subCategory.talent.cleaning' });
  //           case ProductSubCategory.CONSTRUCTION:
  //             return t( 'product.subCategory.talent.construction' });
  //           case ProductSubCategory.REPAIR:
  //             return t( 'product.subCategory.talent.repair' });
  //           case ProductSubCategory.FINANCE:
  //             return t( 'product.subCategory.talent.finance' });
  //           case ProductSubCategory.EVENT:
  //             return t( 'product.subCategory.talent.event' });
  //           case ProductSubCategory.OTHERS:
  //           default:
  //             return t( 'product.subCategory.talent.others' });
  //         }
  //       case ProductCategory.SHARING:
  //         switch (key) {
  //           case ProductSubCategory.WEARING:
  //             return t( 'product.subCategory.sharing.wearing' });
  //           case ProductSubCategory.SLEEPING:
  //             return t( 'product.subCategory.sharing.sleeping' });
  //           case ProductSubCategory.DRIVING:
  //             return t( 'product.subCategory.sharing.driving' });
  //           case ProductSubCategory.USING:
  //             return t( 'product.subCategory.sharing.using' });
  //           case ProductSubCategory.OTHERS:
  //           default:
  //             return t( 'product.subCategory.sharing.others' });
  //         }
  //       case ProductCategory.TOGETHER:
  //         switch (key) {
  //           case ProductSubCategory.BUY:
  //             return t( 'product.subCategory.together.buy' });
  //           case ProductSubCategory.GO:
  //             return t( 'product.subCategory.together.go' });
  //           case ProductSubCategory.VIEW:
  //             return t( 'product.subCategory.together.view' });
  //           case ProductSubCategory.DO:
  //             return t( 'product.subCategory.together.do' });
  //           case ProductSubCategory.OTHERS:
  //           default:
  //             return t( 'product.subCategory.together.others' });
  //         }
  //       default:
  //         return '';
  //     }
  //   }
  //   function getReportTypeTranslation(key?: ReportTypeEnum) {
  //     switch (key) {
  //       case ReportTypeEnum.COMMENT:
  //         return t( 'report.reportType.comment' });
  //       case ReportTypeEnum.REPLY:
  //         return t( 'report.reportType.reply' });
  //       case ReportTypeEnum.PRODUCT:
  //         return t( 'report.reportType.product' });
  //       case ReportTypeEnum.STORE:
  //       default:
  //         return t( 'report.reportType.store' });
  //     }
  //   }
  //   function getSpecialFunctionTypeTranslation(key?: SpecialFunctionEnum) {
  //     switch (key) {
  //       case SpecialFunctionEnum.PUSH_TO_TOP:
  //         return t( 'special.function.pushOnTop' });
  //       case SpecialFunctionEnum.EXPAND:
  //         return t( 'special.function.expand' });
  //       case SpecialFunctionEnum.CHANGE_AREA:
  //       default:
  //         return t( 'special.function.changeArea' });
  //     }
  //   }
};
