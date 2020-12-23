import { Decimal } from 'decimal.js';
import { LocalDate } from 'js-joda';

type ActivityCatalog = {
    id: number;
    name: string;
    details: string;

}

type CreditGeneralData = {
    id: number;
    refinancing_type: 'IN' | 'EX';
    appraiser_value: Decimal;
    price: Decimal;
    grants_value: Decimal;
    collection_bonus: Decimal;
    integrated_bonus: Decimal;
    cash_amount: Decimal;
    credit_amount: Decimal;
    purpose_type: 'RE' | 'GP';
    credit_purpose: 'UL' | 'NL' | 'NU' | 'NN' | 'GP';
    credit_use: 'BU' | 'BD' | 'RR' | 'RF' | 'PD';
    grace: number;
    terms: number;
    period: number;
    rate: Decimal;
    mortgage_fee: Decimal;
    product: number;
    loan_use: number;
    grants: number;

}

type Client = {
    id: number;
    name: string;
    profile: number;

}

type DashboardUserWithName = {
    user: string;
    vat: string;

}

type DashboardClientBase = {
    id: number;
    profile: string;

}

type DashboardPartaker = {
    client: string;
    partaker_type: 'MA' | 'GR' | 'GE' | 'JR' | 'SG' | 'SL';

}

type DashboardProduct = {
    name: string;

}

type DashboardLoanUse = {
    name: string;

}

type DashboardGeneralCreditData = {
    id: number;
    product: string;
    loan_use: string;
    refinancing_type: 'IN' | 'EX';
    appraiser_value: Decimal;
    price: Decimal;
    grants_value: Decimal;
    collection_bonus: Decimal;
    integrated_bonus: Decimal;
    cash_amount: Decimal;
    credit_amount: Decimal;
    purpose_type: 'RE' | 'GP';
    credit_purpose: 'UL' | 'NL' | 'NU' | 'NN' | 'GP';
    credit_use: 'BU' | 'BD' | 'RR' | 'RF' | 'PD';
    grace: number;
    terms: number;
    period: number;
    rate: Decimal;
    mortgage_fee: Decimal;
    grants: number;

}

type AddressBase = {
    dependant_locality: number;
    zip_code: string;
    thoroughfare: string;
    premise: string;
    sub_premise: string;
    gmaps_location: number;

}

type PropertyMetadataExtendedVersion = {
    id: number;
    rol: string;
    old_type: 'NW' | 'OD';
    purpose: 'FT' | 'HS' | 'SD' | 'IT' | 'OT';
    construction_type: 'AE' | 'CE' | 'WD' | 'RD' | 'SL' | 'ML' | 'SE';
    real_estate_use: 'HO' | 'CO' | 'OF' | 'AG' | 'IN' | 'ED' | 'FA';
    real_estate_name: string;
    project_name: string;
    appraisal_value: Decimal;
    insurance_value: Decimal;
    liquidation_value: Decimal;
    tax_assessment: Decimal;
    price: Decimal;
    ground_square_meters: Decimal;
    build_square_meters: Decimal;
    appraisal_date: LocalDate;
    is_dfl_two: string;
    dfl_two: string;
    flag_guarantee: string;
    flag_buy: string;
    other_verbose_field: string;
    built_at: LocalDate;
    built_year: number;
    appraiser_free_version: string;
    local_dependant: number;
    real_state_type: number;
    company_project: number;
    appraiser: number;

}

type PropertyExtendedVersion = {
    id: number;
    address: string;
    metadata: string;
    administrative_area: string;
    locality: string;

}

type Dashboard = {
    id: number;
    time_stamp: string;
    application: string;
    partaker: string;
    credit_general_data: string;
    outcome: string;
    state: string;
    managed_by: string;
    property: string;

}

type Debt = {
    id: number;
    use_amount: Decimal;
    approved_amount: Decimal;
    monthly_payments_total: Decimal;
    terms: number;
    number_of_payments: number;
    verbose_name: string;
    partaker: number;
    debt_catalog: number;
    financial_institution: number;

}

type DebtCatalog = {
    id: number;
    name: string;
    details: string;

}

type DownPayment = {
    id: number;
    details: string;
    amount: Decimal;
    partaker: number;

}

type EmploymentHistory = {
    id: number;
    job_position: string;
    init_date: LocalDate;
    end_date: LocalDate;
    address_type: 'PA' | 'CA' | 'NR';
    partaker: number;
    employer: number;
    activity: number;
    address: number;

}

type Equity = {
    id: number;
    equity: Decimal;
    amount: Decimal;
    partaker: number;
    society: number;

}

type ExpenseInstance = {
    id: number;
    provision: 'CL' | 'MU' | 'RE';
    amount: Decimal;
    expense: number;

}

type FinancialInstitution = {
    id: number;
    name: string;
    details: string;

}

type Grant = {
    id: number;
    issued: LocalDate;
    validity: LocalDate;
    amount: Decimal;
    partaker: number;
    grant_type: number;

}

type Income = {
    id: number;
    amount: Decimal;
    months: string;
    partaker: number;
    income_catalog: number;

}

type IncomeCatalog = {
    id: number;
    name: string;
    details: string;

}

type InstitutionInvestmentType = {
    id: number;
    name: string;
    details: string;

}

type Investment = {
    id: number;
    amount: Decimal;
    partaker: number;
    investment_type: number;
    financial_institution: number;
    institution_investment_type: number;

}

type InvestmentType = {
    id: number;
    name: string;
    details: string;

}

type InvestorsRates = {
    id: number;
    rate: Decimal;
    alt_sequence: number;
    investor: number;

}

type LifeInsurance = {
    id: number;
    life_insurance_type: 'RP' | 'RS' | 'RB' | 'NA';
    domain: Decimal;
    debt: Decimal;
    life_insurance_external_id: number;
    partaker: number;

}

type MaritalStatusCatalog = {
    id: number;
    name: string;
    details: string;

}

type MortgageDocCatalog = {
    id: number;
    name: string;
    details: string;

}

type MortgageSet = {
    id: number;
    doc_status: 'OK' | 'PT' | 'NA';
    mortgage_doc: number;

}

type Partaker = {
    id: number;
    partaker_type: 'MA' | 'GR' | 'GE' | 'JR' | 'SG' | 'SL';
    address_type: 'PA' | 'CA' | 'NR';
    client: number;
    address: number;

}

type UserBase = {
    email: string;
    first_name: string;
    last_name: string;

}

type ProfileMetaDataBase = {
    id: number;
    phone: string;
    cell_phone: string;
    birth_date: LocalDate;
    child_qty: number;
    gender: 'ML' | 'FL' | 'NA';
    persona_type: 'NA' | 'JU';

}

type ProfileBase = {
    id: number;
    user: string;
    metadata: string;
    vat: string;
    is_external_service: string;

}

type ClientBase = {
    id: number;
    profile: string;

}

type PartakerExtendedVersion = {
    id: number;
    client: string;
    address: string;
    partaker_type: 'MA' | 'GR' | 'GE' | 'JR' | 'SG' | 'SL';
    address_type: 'PA' | 'CA' | 'NR';

}

type PatrimonialRegimeCatalog = {
    id: number;
    name: string;
    details: string;

}

type PeopleAugmentedInformation = {
    id: number;
    residence_status: 'TE' | 'RE' | 'CO' | 'NA';
    last_educational_level: 'PY' | 'SY' | 'TA' | 'TS' | 'HE' | 'US' | 'MR' | 'IS';
    family_responsibilities: number;
    partaker: number;
    nationality: number;
    residence: number;
    profession: number;
    marital_status: number;
    patrimonial_regime: number;
    spouse: number;
    spouse_nationality: number;
    spouse_profession: number;

}

type ProfessionCatalog = {
    id: number;
    name: string;
    details: string;

}

type PropertyInsurance = {
    id: number;
    property_insurance_type: 'IS' | 'IB' | 'OD';
    property_insurance_external_id: number;
    property: number;

}

type RealEstateAsActive = {
    id: number;
    partaker: number;
    property: string;

}

type SimulationApplication = {
    uuid: string;
    simulation: number;
    executive: string;

}

type StateVars = {
    id: number;
    time_stamp: string;
    simulations_external_id: number;
    calculated: string;
    appraise_flow: string;
    title_request_flow: string;
    owner: string;
    application: string;
    credit_general_data: number;
    doc_required: string;
    doc_status: string;
    partaker: string;
    property: string;
    operational_expenses: string;
    life_insurance: string;
    property_insurance: string;
    people_augmented_information: string;
    employment_history: string;
    real_estate_as_active: string;
    investment: string;
    vehicle: string;
    equity: string;
    down_payment: string;
    grant: string;
    debt: string;
    income: string;
    investors: string;
    approved_investor_status: string;
    selected_investor: string;
    mortgage_set: string;

}

type Vehicle = {
    id: number;
    model: string;
    year: string;
    vehicle_id: string;
    amount: Decimal;
    partaker: number;
    vehicle_type: number;
    vehicle_brand: number;

}

type VehicleBrand = {
    id: number;
    name: string;
    details: string;

}

type VehicleType = {
    id: number;
    name: string;
    details: string;

}

type Document = {
    uuid: string;

}

type AfterAppraise = {
    id: number;
    date: LocalDate;
    appraiser: string;
    appraise_company: number;
    financial_institution: number;

}

type Appointment = {
    id: number;
    date: string;

}

type AppraiseBlackboard = {
    id: number;
    time_stamp: string;
    application: string;
    appraise_company: number;
    appraise_contact: number;
    real_estate_company: number;
    real_estate_contact: number;
    real_estate_project: number;
    after_appraise: string;
    appraiser: number;
    appointment: number;
    validation: number;
    property: string;
    objection: string;

}

type AppraiseCompany = {
    id: number;
    name: string;
    vat: string;

}

type AppraiseContact = {
    id: number;
    first_name: string;
    last_name: string;
    middle_name: string;
    email: string;
    phone: string;

}

type Objection = {
    id: number;
    create_at: LocalDate;
    author_email: string;
    comment: string;

}

type RealEstate = {
    id: number;
    real_estate_company: number;
    real_estate_project: number;

}

type RealEstateCompany = {
    id: number;
    name: string;
    vat: string;

}

type RealEstateContact = {
    id: number;
    first_name: string;
    last_name: string;
    middle_name: string;
    email: string;
    phone: string;

}

type RealEstateProject = {
    id: number;
    name: string;

}

type Validation = {
    id: number;
    date: LocalDate;

}

type DocCategory = {
    id: number;
    name: string;
    is_active: string;

}

type Doc = {
    id: number;
    name: string;
    is_active: string;
    doc_category: number;

}

type DocRequired = {
    id: number;
    required: string;
    doc: number;

}

type DocStatus = {
    id: number;
    doc_status: 'OK' | 'PT' | 'NA';
    doc: number;

}

type DocGroupCatalog = {
    id: number;
    count: string;
    name: string;
    details: string;

}

type DocManaged = {
    id: number;
    days_to_expire: string;
    parent_uuid: string;
    issued_at: LocalDate;
    created_ts: string;
    details: string;
    file: string;
    partaker: number;
    client: number;
    doc_type: string;

}

type DocManager = {
    uuid: string;
    doc_type: 'CHECKLIST_1' | 'CHECKLIST_2' | 'CHECKLIST_COMMERCIAL' | 'PRE_APPROVAL' | 'CREDIT_EVALUATION_SHEET' | 'OPERATIONAL_EXPENSES' | 'CHECKLIST_3' | 'CHECKLIST_4' | 'PROJECT_INFORMATION' | 'SIMULATIONS';

}

type DocSubGroupCatalog = {
    id: number;
    name: string;
    details: string;
    doc_group: string;

}

type DocToApplication = {
    id: number;
    application: string;
    doc_managed: number;

}

type DocTypeCatalog = {
    id: number;
    name: string;
    details: string;
    is_controlled: string;
    duration: number;
    doc_sub_group: string;

}

type ApplicationSerializerDocManager = {
    application: string;

}

type CompanyAnswer = {
    id: number;
    status_type: 'AP' | 'RP' | 'RJ';
    policy: number;
    over_prima: Decimal;
    create: LocalDate;

}

type DPSBlackboard = {
    id: number;
    time_stamp: string;
    application: string;
    provisional_life_insurance: number;
    dps_partaker: number;
    company_answer: number;
    reconsideration_comments: string;

}

type DpsPartaker = {
    id: number;
    create_at: LocalDate;
    amount: Decimal;
    period: number;
    external_folio: number;
    partaker_type: 'MA' | 'GR' | 'GE' | 'JR' | 'SG' | 'SL';
    client: number;

}

type ProvisionalLifeInsurance = {
    id: number;
    external_id: number;
    type: string;
    policy: number;
    company: string;
    rate: Decimal;
    prima: Decimal;

}

type ReconsiderationComments = {
    id: number;
    create_at: LocalDate;
    author_email: string;
    comment: string;

}

type Application = {
    application: string;

}

type Policies = {
    application: string;
    operational_cost_provided: number;

}

type Receiver = {
    id: number;
    timestamp: string;
    simulation_id: number;
    method: string;
    vat: string;
    received: string;

}

type Insurance = {
    GrupoSeguro_Id: '1' | '2' | '3';

}

type Parity = {
    CodigoMoneda_Id: '998' | '999';

}

type Tmc = {
    CodigoMoneda_Id: '998' | '999';
    Plazo: number;
    MontoCredito: Decimal;

}

type Address = {
    id: number;
    zip_code: string;
    thoroughfare: string;
    premise: string;
    sub_premise: string;
    dependant_locality: number;
    gmaps_location: number;
    human_named_locality: string;

}

type AdministrativeArea = {
    id: number;
    administrative_area_name: string;
    administrative_area_iso_code: string;
    country: number;

}

type CompanyProject = {
    id: number;
    project_name: string;
    details: string;
    create_ts: LocalDate;
    is_active: string;
    company: number;
    address: number;
    meta_data_project: number;
    legal_data_project: number;
    operative_expenses_agreement: number;

}

type Country = {
    id: number;
    country_name: string;
    country_iso_code: string;

}

type DependantLocality = {
    id: number;
    dependant_locality_name: string;
    locality: number;

}

type GmapsLocation = {
    id: number;
    gmaps_lat: Decimal;
    gmaps_lng: Decimal;
    gmaps_address: string;

}

type HousingGrantsCatalog = {
    id: number;
    name: string;
    details: string;

}

type HumanNamedLocality = {
    id: number;
    human_named_locality_name: string;
    dependant_locality: number;

}

type LegalDataProject = {
    id: number;
    ReceptionDate: LocalDate;
    LegalReceptionDate: LocalDate;
    CertificateNumberDate: LocalDate;
    CertificateNumber: string;
    housing_grants: string;

}

type Locality = {
    id: number;
    locality_name: string;
    administrative_area: number;

}

type MetaDataProject = {
    id: number;
    unit_qty: number;
    uf_total_by_project: Decimal;
    average_price: Decimal;
    unit_categories: string;

}

type Property = {
    id: number;
    address: number;
    metadata: number;

}

type PropertyMetaData = {
    id: number;
    rol: string;
    old_type: 'NW' | 'OD';
    purpose: 'FT' | 'HS' | 'SD' | 'IT' | 'OT';
    construction_type: 'AE' | 'CE' | 'WD' | 'RD' | 'SL' | 'ML' | 'SE';
    real_estate_use: 'HO' | 'CO' | 'OF' | 'AG' | 'IN' | 'ED' | 'FA';
    real_estate_name: string;
    project_name: string;
    appraisal_value: Decimal;
    insurance_value: Decimal;
    liquidation_value: Decimal;
    tax_assessment: Decimal;
    price: Decimal;
    ground_square_meters: Decimal;
    build_square_meters: Decimal;
    appraisal_date: LocalDate;
    is_dfl_two: string;
    dfl_two: string;
    flag_guarantee: string;
    flag_buy: string;
    other_verbose_field: string;
    built_at: LocalDate;
    built_year: number;
    appraiser_free_version: string;
    local_dependant: number;
    real_state_type: number;
    company_project: number;
    appraiser: number;

}

type UnitCategoryCatalog = {
    id: number;
    name: string;
    details: string;

}

type AgreementDetail = {
    id: number;
    agreement: number;
    expense: number;

}

type AgreementHeader = {
    id: number;
    name: string;
    description: string;
    is_active: string;

}

type Expense = {
    id: number;
    name: string;
    description: string;
    max_value: Decimal;
    is_active: string;
    is_updatable: string;
    expense_formula: number;
    expense_rule: number;

}

type GroupByUI = {
    id: number;
    name: string;
    description: string;
    real_estate_types: string;
    loan_use: string;

}

type LoanUse = {
    id: number;
    name: string;
    description: string;
    external_id: number;

}

type OperationalCost = {
    name: string;
    notary: Decimal;
    title: Decimal;
    appraise: Decimal;
    title_domain: Decimal;
    is_active: string;

}

type OperationalCostAdded = {
    id: number;
    name: string;
    notary: Decimal;
    title: Decimal;
    appraise: Decimal;
    title_domain: Decimal;
    is_active: string;

}

type OperationalCostLegalVersion = {
    id: number;
    domain_register_factor: Decimal;
    domain_register_added: Decimal;
    domain_register_max_value: Decimal;
    mortgage_register_factor: Decimal;
    mortgage_register_added: Decimal;
    mortgage_register_max_value: Decimal;
    loan_tax_dfl_2: Decimal;
    loan_tax_not_dfl_2: Decimal;

}

type OperationalCostProvided = {
    id: number;
    name: 'NY' | 'TL' | 'AP' | 'TD' | 'DR' | 'MR' | 'LT' | 'MT';
    payment: 'CL' | 'VR' | 'NC' | 'CR' | 'RS';
    payment_method: 'PR' | 'SP' | 'CD';
    amount: Decimal;
    provided_amount: Decimal;
    is_updatable: string;
    provided: string;

}

type OperationalCostProvidedHeader = {
    id: number;
    application: string;
    operational_cost_provided: number;

}

type OperationalCostStatus = {
    id: number;
    send: string;
    application: string;

}

type Product = {
    id: number;
    name: string;
    description: string;
    min_period: number;
    max_period: number;
    min_amount: Decimal;
    max_amount: Decimal;
    external_id: number;
    is_active: string;
    is_range_valid_period: string;
    is_range_amount_valid: string;

}

type RangeAmount = {
    id: number;
    min_amount: Decimal;
    max_amount: Decimal;
    product: number;

}

type RangePeriod = {
    id: number;
    min_years: number;
    max_years: number;
    product: number;

}

type RealEstateType = {
    id: number;
    name: string;
    description: string;
    external_id: number;

}

type TarifaReal = {
    product: number;
    real_estate_type: number;
    loan_use: number;
    period: number;
    amount: Decimal;

}

type Tarificador = {
    id: number;
    rate: Decimal;
    product: number;
    range_period: number;
    range_amount: number;
    real_estate_type: number;
    loan_use: number;

}

type Contact = {
    id: number;
    names: string;
    last_name: string;
    middle_name: string;
    mobile_phone: string;
    phone: string;
    email: string;

}

type CostValidationDate = {
    id: number;
    date: LocalDate;

}

type LawyerCompany = {
    id: number;
    name: string;
    details: string;

}

type LegalSet = {
    id: number;
    doc_status: 'OK' | 'PT' | 'NA' | 'MA';
    mortgage_doc: number;

}

type LegalSetCatalog = {
    id: number;
    name: string;
    details: string;

}

type TitleObjection = {
    id: number;
    state_name: string;
    create_at: LocalDate;
    author_email: string;
    comment: string;
    state: number;

}

type ProjectInformation = {
    id: number;
    administrative_area: string;
    locality: string;
    rol: string;
    sub_rol: string;
    real_estate_company: string;
    project: string;
    thoroughfare: string;
    premise: string;
    sub_premise: string;
    sii_dependant_locality: number;
    dependant_locality: number;

}

type TitleBlackboard = {
    id: number;
    time_stamp: string;
    application: string;
    lawyer_company: number;
    cost_validation_date: number;
    lawyer: number;
    contact: number;
    project_information: number;
    legal_set: string;
    objections: string;

}

type TokenObtainPair = {
    email: string;
    password: string;

}

type TokenRefresh = {
    refresh: string;

}

type User = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;

}

type ProfileMetaData = {
    id: number;
    phone: string;
    cell_phone: string;
    birth_date: LocalDate;
    child_qty: number;
    gender: 'ML' | 'FL' | 'NA';
    persona_type: 'NA' | 'JU';

}

type Profile = {
    id: number;
    user: string;
    metadata: string;
    vat: string;

}

type AppraiserExtended = {
    id: number;
    profile: string;

}

type InvestorExtended = {
    id: number;
    profile: string;

}

type LawyerExtended = {
    id: number;
    profile: string;

}

type NotaryExtended = {
    id: number;
    profile: string;

}

type AdminNC = {
    id: number;
    name: string;
    profile: number;

}

type Appraiser = {
    id: number;
    name: string;
    profile: number;

}

type ChiefExecutiveNC = {
    id: number;
    name: string;
    profile: number;

}

type CompanyExecutive = {
    id: number;
    name: string;
    profile: number;

}

type ExecutiveNC = {
    id: number;
    name: string;
    profile: number;

}

type Investor = {
    id: number;
    name: string;
    profile: number;

}

type Lawyer = {
    id: number;
    name: string;
    profile: number;

}

type Notary = {
    id: number;
    name: string;
    profile: number;

}

type ProfileSerializerWithPK = {
    id: number;
    vat: string;
    user: number;
    metadata: number;

}

type InitApp = {
    uuid: string;
    managed_by: number;

}

type ApplicationMetaDataCatalog = {
    id: number;
    catalog: 'LG' | 'RS' | 'DT';
    name: string;
    details: string;

}

type ApplicationMetadata = {
    id: number;
    time_stamp: string;
    metadata_type: string;
    user: string;
    comment: string;
    application: string;
    metadata: number;

}

type Choices = {
    uuid: string;

}

type State = {
    id: number;
    sla: string;
    name: string;
    description: string;
    alt_sequence: number;
    is_top_level: string;
    period_from: LocalDate;
    period_to: LocalDate;
    workflow_level_type: number;

}

type SetState = {
    uuid: string;
    state: number;

}

type WorkflowStateHierarchy = {
    id: number;
    alt_sequence: number;
    workflow_state_parent: number;
    workflow_state_child: number;

}

type WorkflowStateContext = {
    id: number;
    workflow_state_hierarchy: string;
    alt_sequence: number;
    x_axis: Decimal;
    y_axis: Decimal;
    workflow_state_type: number;

}

type WorkflowStateOption = {
    id: number;
    workflow_state_context: string;
    human_named: string;
    alt_sequence: number;
    workflow_state_type: number;

}

