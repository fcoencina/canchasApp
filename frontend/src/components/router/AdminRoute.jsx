
import PrivateRoute from './PrivateRoute';

function AdminRoute(props) {
  return <PrivateRoute allowedRoles={['admin']} {...props} />;
}

export default AdminRoute;
