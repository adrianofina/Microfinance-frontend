/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  // ========================================
  
  declare type SignUpParams = {
    firstName: string;
    lastName: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    idNumber: string; // Replacing ssn with idNumber for microfinance
    email: string;
    password: string;
  };
  
  declare type LoginUser = {
    email: string;
    password: string;
  };
  
  declare type User = {
    $id: string;
    email: string;
    userId: string;
    firstName: string;
    lastName: string;
    name: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    idNumber: string; // Replacing ssn with idNumber for microfinance
  };
  
  declare type NewUserParams = {
    userId: string;
    email: string;
    name: string;
    password: string;
  };
  
  declare type Account = {
    id: string;
    availableBalance: number;
    currentBalance: number;
    officialName: string;
    mask: string;
    institutionId: string;
    name: string;
    type: string;
    subtype: string;
    appwriteItemId: string;
    shareableId: string;
  };
  
  declare type Loan = {
    id: string;
    $id: string;
    borrowerName: string; // Replacing name with borrowerName for microfinance
    loanAmount: number;
    interestRate: number;
    repaymentSchedule: string;
    accountId: string;
    loanType: string;
    loanCategory: string; // Replacing category with loanCategory for microfinance
    date: string;
    status: string;
    $createdAt: string;
  };
  
  declare type MicrofinanceInstitution = {
    $id: string;
    accountId: string;
    institutionId: string;
    userId: string;
    shareableId: string;
  };
  
  declare type AccountTypes =
    | "savings"
    | "loan";
  
  declare type LoanCategory = "Personal Loan" | "Business Loan" | "Agricultural Loan";
  
  declare type LoanCategoryCount = {
    name: string;
    count: number;
    totalCount: number;
  };
  
  declare type Borrower = {
    firstName: string;
    lastName: string;
  };
  
  declare type LoanParams = {
    sourceAccountId: string;
    destinationAccountId: string;
    amount: string;
  };
  
  declare type AddBorrowerParams = {
    borrowerId: string;
    processorToken: string;
    bankName: string;
  };
  
  declare type NewBorrowerParams = {
    firstName: string;
    lastName: string;
    email: string;
    type: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    idNumber: string; // Replacing ssn with idNumber for microfinance
  };
  
  declare interface CreditCardProps {
    account: Account;
    userName: string;
    showBalance?: boolean;
  }
  
  declare interface InstitutionInfoProps {
    account: Account;
    appwriteItemId?: string;
    type: "full" | "card";
  }
  
  declare interface HeaderBoxProps {
    type?: "title" | "greeting";
    title: string;
    subtext: string;
    user?: string;
  }
  
  declare interface MobileNavProps {
    user: User;
  }
  
  declare interface PageHeaderProps {
    topTitle: string;
    bottomTitle: string;
    topDescription: string;
    bottomDescription: string;
    connectInstitution?: boolean;
  }
  
  declare interface PaginationProps {
    page: number;
    totalPages: number;
  }
  
  declare interface InstitutionLinkProps {
    user: User;
    variant?: "primary" | "ghost";
    institutionId?: string;
  }
  
  declare interface AuthFormProps {
    type: "sign-in" | "sign-up";
  }
  
  declare interface InstitutionDropdownProps {
    accounts: Account[];
    setValue?: UseFormSetValue<any>;
    otherStyles?: string;
  }
  
  declare interface InstitutionTabItemProps {
    account: Account;
    appwriteItemId?: string;
  }
  
  declare interface TotalBalanceBoxProps {
    accounts: Account[];
    totalInstitutions: number;
    totalCurrentBalance: number;
  }
  
  declare interface FooterProps {
    user: User;
    type?: 'mobile' | 'desktop'
  }
  
  declare interface RightSidebarProps {
    user: User;
    loans: Loan[];
    institutions: MicrofinanceInstitution[] & Account[];
  }
  
  declare interface SidebarProps {
    user: User;
  }
  
  declare interface RecentLoansProps {
    accounts: Account[];
    loans: Loan[];
    appwriteItemId: string;
    page: number;
  }
  
  declare interface LoanHistoryTableProps {
    loans: Loan[];
    page: number;
  }
  
  declare interface LoanCategoryBadgeProps {
    loanCategory: string;
  }
  
  declare interface LoanTableProps {
    loans: Loan[];
  }
  
  declare interface LoanCategoryProps {
    loanCategory: LoanCategoryCount;
  }
  
  declare interface DoughnutChartProps {
    accounts: Account[];
  }
  
  declare interface LoanTransferFormProps {
    accounts: Account[];
  }
  
  // Actions
  declare interface getAccountsProps {
    userId: string;
  }
  
  declare interface getAccountProps {
    appwriteItemId: string;
  }
  
  declare interface getInstitutionProps {
    institutionId: string;
  }
  
  declare interface getLoansProps {
    accountId: string;
  }
  
  declare interface CreateLoanTransactionProps {
    borrowerName: string;
    amount: string;
    senderId: string;
    senderAccountId: string;
    receiverId: string;
    receiverAccountId: string;
    email: string;
  }
  
  declare interface getLoansByAccountIdProps {
    accountId: string;
  }
  
  declare interface signInProps {
    email: string;
    password: string;
  }
  
  declare interface getUserInfoProps {
    userId: string;
  }
  
  declare interface exchangePublicTokenProps {
    publicToken: string;
    user: User;
  }
  
  declare interface createInstitutionAccountProps {
    accessToken: string;
    userId: string;
    accountId: string;
    institutionId: string;
    shareableId: string;
  }
  
  declare interface getInstitutionsProps {
    userId: string;
  }
  
  declare interface getInstitutionByAccountIdProps {
    accountId: string;
  }
  