const DashboardRepository =
require('../../infrastructure/repositories/DashboardRepository');

class DashboardController {

    async getDashboard(req,res){

        try{

            const repository =
            new DashboardRepository();

            const stats =
            await repository.getStats(
                req.user.id
            );

            const revenue =
            await repository.getMonthlyRevenue(
                req.user.id
            );

            const topItems =
            await repository.getTopItems(
                req.user.id
            );

            res.json({

                stats,

                revenue,

                topItems

            });

        }

        catch(error){

            res.status(500).json({

                error:error.message

            });

        }

    }

    

}

module.exports =
new DashboardController();