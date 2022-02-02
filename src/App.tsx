import { Header } from './components/Header';
import { RouteNav } from './routes/RouteNav';
import { I18nProvider } from './lang';
import { langSelector } from './redux/locale/selectors';
import { useSelector } from 'react-redux';

function App(): JSX.Element {
    const locale = useSelector(langSelector);

    return (
        <I18nProvider locale={locale}>
            <Header />
            <RouteNav />
        </I18nProvider>
    );
}

export default App;
