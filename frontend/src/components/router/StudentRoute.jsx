
import PrivateRoute from './PrivateRoute';

function StudentRoute(props) {
  return <PrivateRoute allowedRoles={['student']} {...props} />;
}

export default StudentRoute;
