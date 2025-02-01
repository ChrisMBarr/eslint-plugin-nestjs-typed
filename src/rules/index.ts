import injectableShouldBeProvided from "./injectablesShouldBeProvided/injectableShouldBeProvided.js";
import providedInjectedShouldMatchFactoryParameters from "./providerInjectedShouldMatchFactory/ProviderInjectedShouldMatchFactory.js";
import apiPropertyMatchesPropertyOptionality from "./apiPropertyMatchesPropertyOptionality/apiPropertyMatchesPropertyOptionality.js";
import controllerDecoratedHasApiTags from "./controllerDecoratedHasApiTags/controllerDecoratedHasApiTags.js";
import apiMethodsShouldSpecifyApiResponse from "./apiMethodsShouldSpecifyApiResponse/apiMethodsShouldSpecifyApiResponse.js";
import apiEnumPropertyBestPractices from "./apiEnumPropertyBestPractices/apiEnumPropertyBestPractices.js";
import apiPropertyReturningArrayShouldSetArray from "./apiPropertyReturningArrayShouldSetArray/apiPropertyReturningArrayShouldSetArray.js";
import shouldSpecifyForbidUnknownValues from "./shouldSpecifyForbidUnknownValues/shouldSpecifyForbidUnknownValuesRule.js";
import parameterDecoratorNameMatchesRouteParam from "./paramDecoratorNameMatchesRouteParam/paramDecoratorNameMatchesRouteParam.js";
import validateNonPrimitiveNeedsDecorators from "./validateNonPrimitiveNeedsTypeDecorator/validateNonPrimitiveNeedsDecorators.js";
import validateNestedOfArrayShouldSetEach from "./validateNestedOfArrayShouldSetEach/validateNestedOfArrayShouldSetEach.js";
import allPropertiesAreWhitelisted from "./allPropertiesAreWhitelisted/allPropertiesAreWhitelisted.js";
import allPropertiesHaveExplicitDefined from "./allPropertiesHaveExplicitDefined/allPropertiesHaveExplicitDefined.js";
import apiMethodsShouldBeGuarded from "./apiMethodsShouldBeGuarded/apiMethodsShouldBeGuarded.js";
import apiMethodsShouldSpecifyApiOperation from "./apiMethodsShouldSpecifyApiOperation/apiMethodsShouldSpecifyApiOperation.js";
import sortModuleMetadataArrays from "./sortModuleMetadataArrays/sortModuleMetadataArrays.js";
import noDuplicateDecorators from "./noDuplicateDecorators/noDuplicateDecorators.js";
const allRules = {
    "all-properties-have-explicit-defined": allPropertiesHaveExplicitDefined,
    "api-property-matches-property-optionality":
        apiPropertyMatchesPropertyOptionality,
    "injectable-should-be-provided": injectableShouldBeProvided,
    "no-duplicate-decorators": noDuplicateDecorators,
    "provided-injected-should-match-factory-parameters":
        providedInjectedShouldMatchFactoryParameters,
    "controllers-should-supply-api-tags": controllerDecoratedHasApiTags,
    "api-method-should-specify-api-response":
        apiMethodsShouldSpecifyApiResponse,
    "api-method-should-specify-api-operation":
        apiMethodsShouldSpecifyApiOperation,
    "api-enum-property-best-practices": apiEnumPropertyBestPractices,
    "api-property-returning-array-should-set-array":
        apiPropertyReturningArrayShouldSetArray,
    "should-specify-forbid-unknown-values": shouldSpecifyForbidUnknownValues,
    "param-decorator-name-matches-route-param":
        parameterDecoratorNameMatchesRouteParam,
    "validated-non-primitive-property-needs-type-decorator":
        validateNonPrimitiveNeedsDecorators,
    "validate-nested-of-array-should-set-each":
        validateNestedOfArrayShouldSetEach,
    "all-properties-are-whitelisted": allPropertiesAreWhitelisted,
    "api-methods-should-be-guarded": apiMethodsShouldBeGuarded,
    "sort-module-metadata-arrays": sortModuleMetadataArrays,
};

export default allRules;
