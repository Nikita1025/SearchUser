import { UserSearchPage } from 'pages/UserSearchPage';
import { classNames } from 'shared/lib/classNames/classNames';

const App = () => (
    <div className={classNames('app')}>
        <UserSearchPage />
    </div>
);

export default App;
